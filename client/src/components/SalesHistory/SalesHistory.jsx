import { getAllProducts, getMyOrders } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import SalesHistoryCard from './SalesHistoryCard';

export default function SalesHistory() {
  const { user, isAuthenticated } = useAuth0()
  const orders = useSelector(state => state.myOrders)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllProducts());
    if (isAuthenticated) {
      dispatch(getMyOrders(user.sub.slice(user.sub.indexOf("|") + 1)))
    }
  }, [dispatch, isAuthenticated, user])

  if(orders.length ===0){
    return(
      <h1>You have no sales yet</h1>
    )
  }
  const mapOrders = orders.map((order, idx) => <SalesHistoryCard key={idx} instrument={order.instrument} status={order.status} quantity={order.quantity} />)

  return (
    <>
      {mapOrders}
    </>
  )
}