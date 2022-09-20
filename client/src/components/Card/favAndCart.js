const addToFav = ( id, name, price, rating, image, brand,handleAdded, handleNotAdded) => {
  let favs = JSON.parse(localStorage.getItem('favList'))
  if (favs) {
    if (favs.length >= 30) {
      handleNotAdded()
      return
    }
    if (!favs.some(item => item.id === id)) {
      favs.push({ id, name, price, rating, image, brand, quantity: 1})
    }
  } else {
    favs = [{ id, name, price, rating, image, brand, quantity: 1 }]
  }
  localStorage.setItem('favList', JSON.stringify(favs))
  handleAdded()
}

const addToCart = ( id, name, price, rating, image, brand, color, handleAdded, handleNotAdded) => {
  let cart = JSON.parse(localStorage.getItem('cartList'))
  if (cart) {
    if (cart.length >= 30) {
      handleNotAdded()
      return
    }
    if (!cart.some(item => item.id === id)) {
      cart.push({ id, name, price, rating, image, brand, color , quantity: 1})
    }
  } else {
    cart = [{ id, name, price, rating, image, brand, color , quantity: 1}]
  }
  localStorage.setItem('cartList', JSON.stringify(cart))
  handleAdded()
}

const getPrice = () => {
  let total = 0
  JSON.parse(localStorage.getItem('cartList')).forEach(e => {
    total += e.price * e.quantity
  })
  return total.toFixed(2)
}


module.exports = {
  addToFav,
  addToCart,
  getPrice
}