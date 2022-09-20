import * as React from 'react';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { allOrders, getAllProducts } from '../../redux/actions';
import { TableHead } from '@mui/material';

export default function Deposits() {
  const dispatch = useDispatch()
  const allOrder = useSelector((state) => state.orders)
  const allInstruments = useSelector((state) => state.allInstruments)

  React.useEffect(() => {
    dispatch(allOrders())
    dispatch(getAllProducts())
  }, [dispatch])

  const getPrice = (products) => {
    const instrument = []
    products.forEach(element => {
      instrument.push({ inst: allInstruments.find(item => item._id === element.products), quant: element.quantity })
    });
    let total = 0
    instrument.forEach(e => {
      total += (e.inst ? e.inst.price : 0) * e.quant
    })
    return total
  }

  // const getProfit = (price) => {
  //   let total = getPrice(price)
  //   let profit = 0
  //   return profit += total * 0.012
  // }

  const getAllProfit = (price) => {
    let total = getPrice(price)
    let array1 = []
    for (let i = 0; i < total.length; i++) {
      array1.push(total[i]);
    }

    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumWithInitial
  }

  let today = new Date();
  let now = today.toLocaleDateString('en-US')

  return (
    <React.Fragment>

      <TableHead>
        <Title>Estimated Profit</Title>
      </TableHead>

      {allOrder.map((row, idx) => (row.status !== "cancelled" && row.user !== null && getPrice(row.products) !== 0 &&
        <div>
          <Typography component="p" variant="h4">
            {getAllProfit(row.products).toFixed(2)}
          </Typography>

          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {now}
          </Typography>

        </div>
      ))}


    </React.Fragment>
  );
}