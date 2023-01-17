import React from 'react'
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap'
import Styles from '../styles/About.module.css'
import Kalai from '../public/assests/kalaiSelvan.jpeg'
import { FaWhatsappSquare } from "react-icons/fa"

function about() {
  return (
    <div className={Styles.aboutOuter}>
        <div className={Styles.aboutinner}>
      <Container>
        <Row className={Styles.aboutContent}>
            <Col md={6}>
            <h1>ABOUT US</h1>
            <p>Kalai TN 37 was founded by MR.KALAISELVAN S in January 2015 in Coimbatore, Tamilnadu, India. He completed BCA in Hindustan College of Arts and Sciences due to his interest in ROYAL ENFILED BIKES. He decided to start a Royal enfiled bike accessories shop along with Royal enfiled bike modifications.</p>
            <p>Kalai TN 37  is geared up to inventory and offer original and real spares and further fittings for Royal Enfield bikes. Riders experience an uninterrupted user experience. All Royal Enfield accessories, spare, components, greater fittings, silencer, crash guard, led lighting fixtures, stickers are available.</p>
            </Col>
            <Col md={6}>
                <div className={Styles.imageContainer}>
                <Image src={Kalai} width='200' height='200' alt='about'/>
                <h6>KALAISELVAN S</h6>
                <h3>Proprietor</h3>
                </div>
            </Col>

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
  )
}

export default about
