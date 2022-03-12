import Carousel from 'react-bootstrap/Carousel'
import room from '../../static/dorm_room.jpg'
import './Carousel.css'

function CarouselComponent() {

return(
  <Carousel className='gallery'>

    <Carousel.Item className='gallery' >
      <img  
        // className="d-block w-100"
        src={room}
        alt="First slide"
      />

    </Carousel.Item>

    <Carousel.Item className='gallery' >
      <img 
        // className="d-block w-100"
        src={room}
        alt="Second slide"
      />

    </Carousel.Item>

    <Carousel.Item className='gallery'>
      <img  
        // className="d-block w-100"
        src={room}
        alt="Third slide"
      />

    </Carousel.Item>
    
</Carousel>
  );
}

export default CarouselComponent;
