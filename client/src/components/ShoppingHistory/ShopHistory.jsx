import { getAllProducts, getMyOrders } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux"
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';
import NothingFound from '../NothingFound/NothingFound';

export default function ShopHistory() {
  const { user, isAuthenticated } = useAuth0()
  const myOrders = useSelector(state => state.myOrders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts());
    if (isAuthenticated) {
      dispatch(getMyOrders(user.sub.slice(user.sub.indexOf("|") + 1)))
    }
  }, [dispatch, isAuthenticated, user])

  if (isAuthenticated) {
    // const mapOrders = myOrders.map(order => <>order</>)
    if (myOrders.length === 0) {
      return (<NothingFound />)
    }
  }

  return (
    <Loading />
  )
}