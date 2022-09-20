import { useNavigate } from 'react-router';
import imageOne from '../../components/img/1.png';
import imageTwo from '../../components/img/2.png';
import imageThree from '../../components/img/3.png';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

export default function Carrousel() {
  const navigate = useNavigate()

  return (
    <Carousel className='containerCarousel' variant="dark">
      <Carousel.Item interval={3000}>
        <img className="imageCarousel"
          src={imageOne}
          alt="First slide"
          onClick={() => navigate("/detail/630ff421bb07c7c8ca7fcaa2")} />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="imageCarousel"
          src={imageTwo}
          alt="Second slide"
          onClick={() => navigate("/detail/63004a6a329ff6b6923c5b39")} />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="imageCarousel"
          src={imageThree}
          alt="Third slide"
          onClick={() => navigate("/detail/63004a6a329ff6b6923c5b4d")} />
      </Carousel.Item>
    </Carousel>
  );
}