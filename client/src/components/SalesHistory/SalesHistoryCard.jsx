import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { TiDelete } from 'react-icons/ti';

export default function SalesHistoryCard( {instrument, status, quantity} ) {

  if (instrument) {
    return (
      <Card className="card UserProductCard" >
        <Link className='containCardImage' to={"/detail/" + instrument.id}>
          <img className='cardImage' src={instrument.image} alt={instrument.name} />
        </Link>
        <Card.Body className='containCardBody'>
          <Link to={"/detail/" + instrument.id}>
            <Card.Title className='containerName'>{instrument.name}</Card.Title>
          </Link>
          <ListGroup className='containerListDescription' variant="flush">
            <ListGroup.Item className='cardBrand'>{instrument.brand}</ListGroup.Item>
            <ListGroup.Item className='cardPrice'>${instrument.price}</ListGroup.Item>
            <ListGroup.Item className='cardRating'>quantity: {quantity}</ListGroup.Item>
            <ListGroup.Item className='cardRating'>Status: {status}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <div className='containerButton'>
          <Link to={"/detail/" + instrument.id}>
          </Link>
          <TiDelete className='CardIcon EditIcon' />
        </div>
      </Card>
    )
  }
  return(
    <></>
  )
}