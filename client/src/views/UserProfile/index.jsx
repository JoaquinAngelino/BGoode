import { Route, Routes, useNavigate } from "react-router-dom";
import ShoppingHistory from "../../components/ShoppingHistory/ShopHistory";
import UserProducts from "../../components/UserProducts/UserProducts";
import SalesHistory from "../../components/SalesHistory/SalesHistory";
import NotFound from "../NotFound";
import UserProf from "../../components/UserProfile/UserProf";
import UserEditData from "../../components/UserProfile/UserEditData";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { getUserByEmail } from "../../redux/actions";
import { useDispatch } from "react-redux";
import UserControl from '../../components/UserControl/UserControl';
import UserDetail from '../../components/UserControl/UserDetail';
import UserEdit from '../../components/UserControl/UserEdit';
import Dashboard from '../../components/Administrator/admin';

export default function UserProfile() {
  const {user, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserByEmail(user.email))
    }
  }, [isAuthenticated])

  if (isLoading) {
    return <Loading />
  }
  if (!isAuthenticated) {
    navigate("/")
  }
  return (
    <>
      <Routes>
        <Route exact path='/shop-history' element={<ShoppingHistory />} />
        <Route exact path='/my-products' element={<UserProducts />} />
        <Route exact path='/sold' element={<SalesHistory />} />
        <Route exact path='/data' element={<UserProf />} />
        <Route exact path='/data/edit' element={<UserEditData />} />
        <Route exact path='/admin/*' element={<Dashboard />} />
        <Route exact path='/admin/usercontrol' element={<UserControl />} />
        <Route exact path='/admin/usercontrol/userdetail/:email' element={<UserDetail />} />
        <Route exact path='/admin/usercontrol/userdetail/userEdit/:email' element={<UserEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
