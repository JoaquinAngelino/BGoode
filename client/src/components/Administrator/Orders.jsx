import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { allOrders, getAllProducts } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';


export default function Orders() {

  const dispatch = useDispatch()
  const allOrder = useSelector((state) => state.orders)
  const allInstruments = useSelector((state) => state.allInstruments)

  useEffect(() => {
    dispatch(allOrders())
    dispatch(getAllProducts())
  }, [dispatch])

  const getPrice = (products) => {
    const instrument = []
    products.forEach(element => {
      instrument.push({inst: allInstruments.find(item => item._id === element.products), quant: element.quantity})
    });
    let total = 0
    instrument.forEach(e => {
      total += (e.inst ? e.inst.price : 0) * e.quant
    })
    return total
  }

  const getProfit = (price) => {
    let total = getPrice(price)
    let profit = 0
    return profit += total * 0.012
  }
  
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Estimated Profit</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrder.map((row, idx) => (row.status !== "cancelled" && row.user !== null && getPrice(row.products) !== 0 &&
            <TableRow key={idx}>
              <TableCell>{row.createdAt.toString().slice(0,10)}</TableCell>
              <TableCell>{ row.user.username}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{`$${(getProfit(row.products)).toFixed(2)}`}</TableCell>
              <TableCell align="right">{`$${(getPrice(row.products)).toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}