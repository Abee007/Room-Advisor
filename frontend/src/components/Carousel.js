import Carousel from 'react-bootstrap/Carousel'
import room from '../static/dorm_room.jpg'
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
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}

  </Carousel.Item>
  <Carousel.Item className='gallery' >
    <img 
      // className="d-block w-100"
      src={room}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item className='gallery'>
    <img  
      // className="d-block w-100"
      src={room}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
  );
}

export default CarouselComponent;
