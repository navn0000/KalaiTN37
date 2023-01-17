import React from 'react'
import Image from "next/image"
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import Styles from '../../styles/Home.module.css'
import Classic from '../../public/assests/Classic350.webp'
import Himalayan from '../../public/assests/himalaiyanone.webp'
import Hunter from '../../public/assests/Hunterone.jpg'
import Meteior from '../../public/assests/meteior.webp'
import Inteceptor from '../../public/assests/inteceptorone.webp'
import Scram from '../../public/assests/scram.webp'
import { FaWhatsappSquare } from "react-icons/fa"
import Mapimg from '../../public/assests/map.png'
function HomePage() {

  return (
    <>
    <div className={Styles.homeOuter}>
      <div className={Styles.homeInner}>
      <Container>
        <Row>
          <Col md={6}>
          <div className={Styles.main}>
            <h1>KALAI TN37</h1>
            <p>Genuine Royal Enfield Accessories in Coimbatore</p>
          </div>
          </Col>
          <Col md={6}></Col>
        </Row>       
      </Container>
      </div>
    </div>
    <div className={Styles.whyUs}>
    <div className={Styles.whyUsinner}>
      <Container>
        <Row>
            <h1>WHY KALAI TN37?</h1>
            <h6>BEST IN COIMBATORE</h6>
            <p>We’re presenting all royal Enfield Accessories, add-ons, and spares with first-class and superior quality in Coimbatore. Riding is a passion! And We ensure that we supply not just the motorbike spare components but additionally the reviews, making each journey of our biker buddies with all the extra security, and fashionable.</p>
          
        </Row>
      </Container>
      </div>
    </div>
    <div className={Styles.accessoriesFor}>
      <div className={Styles.accessoriesForInner}>
        <Container>
          <h1>OUR ACCESSORIES FOR</h1>
          <Row>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
            <Card.Body className='p-0 m-0'>
            <p>CLASSIC</p>

              <Image src={Classic} alt='pet' width='300' height='300'  />
            </Card.Body>
          </Card>
            </Col>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
             
            <Card.Body className='p-0 m-0'>
            <p>HIMALAIYAN</p>

              <Image src={Himalayan} alt='pet' width='300' height='300' />
            </Card.Body>
          </Card>
            </Col>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
             
            <Card.Body className='p-0 m-0'>
            <p>HUNTER</p>

              <Image src={Hunter} alt='pet' width='300' height='300' />
            </Card.Body>
          </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
             
            <Card.Body className='p-0 m-0'>
            <p>METEOR</p>

              <Image src={Meteior} alt='pet' width='300' height='300' />
            </Card.Body>
          </Card>
            </Col>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
             
            <Card.Body Name='p-0 m-0'>
            <p>INTECEPTOR</p>

              <Image src={Inteceptor} alt='pet' width='300' height='300' />
            </Card.Body>
          </Card>
            </Col>
            <Col md={4}>
            <Card className={Styles.accessoriesForCard}>
              
            <Card.Body className='p-0 m-0'>
            <p>SCRAM 411</p>

              <Image src={Scram} alt='pet' width='300' height='300' />
            </Card.Body>
          </Card>
            </Col>
          </Row>
        
        </Container>
      </div>
    </div>
    <div className={Styles.customerReview}>
      <div className={Styles.customerReviewInner}>
      <Container>
      <div>
            <h1>CUSTOMER REVIEWS</h1>
            <p>Kalai TN 37  has 1000's of customers and counting with good and positive feedbacks, We are always customer friendly all aspects which makes our customer happy</p>
           
        </div>
        <Carousel>
      <Carousel.Item interval={1000}>
      <Row>
              <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Chaarugash R J</h6>
                  <h2>Best shop for RE and very good person👍☺️</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Ashwath Ravi</h6>
                  <h2>Good in quality.....doing best ....in class 🤩</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Dinesh kumar</h6>
                  <h2>Very good services. Accessories are very genuine.Kalai TN37 Bullet Accessories ♥️</h2>
                </Card.Body>
              </Card>
            </Col>
              </Row>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
      <Row>
              <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Jaya Kumar</h6>
                  <h2>Best shop for royal enfield</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>VIGNESH SUBRAMANIAN</h6>
                  <h2>Happy with the product.Good quality and good support.</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>ashok sundar</h6>
                  <h2>Iam happy with is product fast delivery.</h2>
                </Card.Body>
              </Card>
            </Col>
              </Row>
      </Carousel.Item>
      <Carousel.Item>
       
      <Row>
              <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>ARUL KUMAR</h6>
                  <h2>Fast delivery, good quality and low price good approach</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Naveenkumar</h6>
                  <h2>kalaitn37 thanks..
your product and price good and nice quality...
your silence sound and perfomance also good.. thnak you</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={Styles.cardView}>
                <Card.Body>
                  <h6>Hari haran</h6>
                  <h2>Good quality,way of approach good</h2>
                </Card.Body>
              </Card>
            </Col>
              </Row>
      </Carousel.Item>
    </Carousel>
      
           
   

      </Container>
      
      <div className={Styles.whatsappIcon}>
      <a
        href="https://wa.me/+918098037670"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare />
      </a>
      </div>
      </div>
      
    

    </div>
    <div className={Styles.mapContainer}>
      <div className={Styles.mapinnerContainer}>
        <a href='https://goo.gl/maps/DUtjX5WTaxZYQoAC7' target='_blank'>
        <Image src={Mapimg} alt='map' width="1000" height="400" />
        </a>
    </div>
    </div>
    </>
  )
}



export default HomePage

