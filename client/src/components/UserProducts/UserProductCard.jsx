import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillEdit } from 'react-icons/ai';
import './UserProductCard.css'
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';

export default function UserProductCard({ id, name, price, rating, image, brand }) {

  const deleteItem = async () => {
    axios.delete("/products/" + id);
    window.location.reload()
  }

  return (
    <Card className="card UserProductCard" >
      <Link className='containCardImage' to={"/detail/" + id}>
        <img className='cardImage' src={image} alt={name} />
      </Link>
      <Card.Body className='containCardBody'>
        <Link to={"/detail/" + id}>
          <Card.Title className='containerName'>{name}</Card.Title>
        </Link>
        <ListGroup className='containerListDescription' variant="flush">
          <ListGroup.Item className='cardBrand'>{brand}</ListGroup.Item>
          <ListGroup.Item className='cardPrice'>${price}</ListGroup.Item>
          <ListGroup.Item className='cardRating'>
            <p className={rating >= 1 ? 'cardStarActive' : 'cardStar'}>&#9733;</p>
            <p className={rating >= 2 ? 'cardStarActive' : 'cardStar'}>&#9733;</p>
            <p className={rating >= 3 ? 'cardStarActive' : 'cardStar'}>&#9733;</p>
            <p className={rating >= 4 ? 'cardStarActive' : 'cardStar'}>&#9733;</p>
            <p className={rating === 5 ? 'cardStarActive' : 'cardStar'}>&#9733;</p>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <div className='containerButton'>
        <Link to={"/detail/" + id}>
          <AiFillEdit className='CardIcon EditIcon' />
        </Link>
        <TiDelete className='CardIcon EditIcon' onClick={deleteItem} />
      </div>
    </Card>
  )
}