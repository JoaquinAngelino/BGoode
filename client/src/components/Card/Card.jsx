// React utilities
import React from 'react';
import { Link } from 'react-router-dom'
// Components 
import { addToFav, addToCart } from './favAndCart';
// Styles
import { BsCartFill, BsStarFill } from 'react-icons/bs';
import ReactStars from 'react-stars';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Card.css'


export default function ProductCard({ id, name, price, rating, image, brand, color, handleAdded, handleNotAdded }) {

  return (
    <Card className="card" >
      <Link className='containCardImage' to={"/detail/" + id}>
        <img className='cardImage' src={image} alt="" />
      </Link>
      <Card.Body className='containCardBody'>
        <Link to={"/detail/" + id}>
          <Card.Title className='containerName'>{name}</Card.Title>
        </Link>
        <ListGroup className='containerListDescription' variant="flush">
          <ListGroup.Item className='cardBrand'>{brand}</ListGroup.Item>
          <ListGroup.Item className='cardPrice'>${price}</ListGroup.Item>
          <ListGroup.Item className='cardRating'>
            <ReactStars
              className="stars"
              value={rating}
              edit={false}
              size={18}
              color1={'#888'}
              color2={'#169E85'}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <div className='containerButton'>
        <BsStarFill className='CardIcon' onClick={() => addToFav(id, name, price, rating, image, brand, handleAdded, handleNotAdded)} />
        <BsCartFill className='CardIcon' onClick={() => addToCart(id, name, price, rating, image, brand, color, handleAdded, handleNotAdded)} />
      </div>
    </Card>
  )
}
