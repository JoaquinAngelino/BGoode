import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getUserByEmail } from "../../redux/actions"
import NothingFound from "../NothingFound/NothingFound"
import UserProductCard from "./UserProductCard"

export default function UserProducts() {
  const { user, isAuthenticated } = useAuth0()
  const myUser = useSelector(state => state.usersEmail)
  const allProducts = useSelector(state => state.allInstruments)
  const dispatch = useDispatch()
  let myProducts = []
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserByEmail(user.email))
    }
    dispatch(getAllProducts())
  }, [dispatch, isAuthenticated])
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])



  if (myUser.products && allProducts.length) {
    myProducts = myUser.products.map(e => allProducts.find(product => product._id === e))
    myProducts = myProducts.filter(e => e !== undefined)
  }
  if (!myProducts || myProducts.length === 0){
    return (
      <>
        <h2>My products</h2>
        <NothingFound />
      </>
    )
  }
  let mapProducts = myProducts.map(instrument => {
    return (
      <UserProductCard
        key={instrument._id}
        id={instrument._id}
        name={instrument.name}
        price={instrument.price}
        brand={instrument.brand}
        rating={Math.floor((Math.random() * 6))}
        image={instrument.image}
      />
    )
  })
  return (
    <>
      {mapProducts}
    </>
  )
}
