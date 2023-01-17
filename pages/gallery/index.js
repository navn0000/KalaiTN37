import React from 'react'
import Styles from '../../styles/Service.module.css'
import one from '../../public/assests/services/one.jpeg'
import two from '../../public/assests/services/two.jpeg'
import three from '../../public/assests/services/three.jpeg'
import four from '../../public/assests/services/four.jpeg'
import five from '../../public/assests/services/five.jpeg'
import six from '../../public/assests/services/six.jpeg'
import seven from '../../public/assests/services/seven.jpeg'
import eight from '../../public/assests/services/eight.jpeg'
import nine from '../../public/assests/services/nine.jpeg'
import ten from '../../public/assests/services/ten.jpeg'
import eleven from '../../public/assests/services/eleven.jpeg'
import twelve from '../../public/assests/services/twelve.jpeg'
import thirteen from '../../public/assests/services/thirteen.jpeg'
import fourteen from '../../public/assests/services/fouteen.jpeg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { FaWhatsappSquare } from "react-icons/fa"


function Services() {
    const Data = [
        {
            id: 1,
            img: one
        },
        {
            id: 2,
            img: two
        },
        {
            id: 3,
            img: three
        },
        {
            id: 4,
            img: four
        },
        {
            id: 5,
            img: five
        },
        {
            id: 6,
            img: six
        },
        {
            id: 7,
            img: seven
        },
        {
            id: 8,
            img: eight
        },
        {
            id: 9,
            img: nine
        },
        {
            id: 10,
            img: ten
        },
        {
            id: 11,
            img: eleven
        },
        {
            id: 12,
            img: twelve
        },
        {
            id: 13,
            img: thirteen
        },
        {
            id: 14,
            img: fourteen
        },
    ]
  return (
    <div className={Styles.servicesOuter}>
        <div className={Styles.serviceContainer}>
        <div className={Styles.servicesInner}>
        <Container>
            <h6 className='mb-5'>Gallery</h6>
            <Row>
                {
                    Data?.map((item) => {
                        return(
                            <Col md={3} key={item?.id}>
                              <Card className={Styles.imageCard}>
                                <Card.Body className={Styles.cardinnerBody}>
                                    <Image src={item?.img} width='200' height="300" />
                                </Card.Body>
                              </Card>
                            </Col>
                        )
                    })
                }
            </Row>
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
    </div>
  )
}

export default Services
