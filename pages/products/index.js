import React from 'react'
import Image from "next/image"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Styles from '../../styles/Products.module.css'
import Classic from '../../public/assests/Classic350.webp'
import Himalayan from '../../public/assests/himalaiyanone.webp'
import Hunter from '../../public/assests/Hunterone.jpg'
import Meteior from '../../public/assests/meteior.webp'
import Inteceptor from '../../public/assests/inteceptorone.webp'
import Scram from '../../public/assests/scram.webp'
import { FaWhatsappSquare } from "react-icons/fa"

function Products() {
    const data = [
        {
            id: 1,
            name: "Classic",
            img: Classic,
            link: "/products/classic"
        },
        {
            id: 2,
            name: "Himalayan",
            img: Himalayan,
            link: "/products/himalayan"

        },
        {
            id: 3,
            name: "Hunter",
            img: Hunter,
            link: "/products/hunter"

        },
        {
            id: 4,
            name: "Meteior",
            img: Meteior,
            link: "/products/meteior"

        },
        {
            id: 5,
            name: "Inteceptor",
            img: Inteceptor,
            link: "/products/inteceptor"

        },
        {
            id: 6,
            name: "Scram",
            img: Scram,
            link: "/products/scram"
        },
        {
            id: 7,
            name: "Classic Re-Born",
            img: Classic,
            link: "/products/classic"
        },

    ]
  return (
    <div className={Styles.productsOuter}>
        <div className={Styles.productContainer}>
        <div className={Styles.productsInner}>
        <Container >
        <h6 className='mb-5'>Products</h6>

            <Row>
                {
                    data.map((item) => {
                        return(
                        <Col md={4} key={item.id}>
                            <Card className='mb-5'>
                                <Card.Body>
                                <h1>{item.name}</h1>
                                <Image src={item.img} width='200' height='200' alt='explore' />
                                </Card.Body>
                                <Button href={item?.link} className={Styles.explorebtn}>
                                    Explore
                                </Button>
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

export default Products
