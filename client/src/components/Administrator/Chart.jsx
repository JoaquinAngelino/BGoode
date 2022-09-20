import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { allOrders, getAllProducts } from '../../redux/actions';

export default function Chart() {

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
      instrument.push({ inst: allInstruments.find(item => item._id === element.products), quant: element.quantity })
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


  let data = [];
  allOrder.map((row) => {
    data.push({
      date: row.createdAt.toString().slice(5, 10),
      profit: getProfit(row.products).toFixed(2),
      sales: getPrice(row.products).toFixed(2),
    })
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

