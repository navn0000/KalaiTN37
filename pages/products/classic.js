import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Handelbar from "../../public/assests/classic.jpg"

function classic() {

    const router = useRouter();

    const backClick = () =>{
      router.push('/products');
    }

    const data = [
        { id: 1, name: "Non-Slip Breathable Motor Racing Gloves", img: Handelbar, price: "₹6,990",},
        { id: 2, name: "TOURING PASSENGER SEAT CLASSIC Royal Enfield", img: Handelbar, price: "₹6,990" },
        { id: 3, name: "Royal Enfield Men's Riding Jacket", img: Handelbar, price: "₹6,990"},
        { id: 4, name: "Grill for Royal Enfield Bullet Classic (Black, Set of 8)", img: Handelbar, price: "₹6,990"},
        { id: 5, name: "Back Seat Rest Foam for Royal Enfield,Faux Leather,black", img: Handelbar, price: "₹6,990"},
        { id: 6, name: "Sump Guard Suitable for Royal Enfield Classic", img: Handelbar, price: "₹6,990"},
        { id: 7, name: "Mobile Holder for Bikes", img: Handelbar, price: "₹6,990"},
        { id: 8, name: "Handle Grip End Round Side Mirror", img: Handelbar, price: "₹6,990"},
        { id: 9, name: "Tank Cover for CLASSIC350/500", img: Handelbar, price: "₹6,990"},
        { id: 10, name: "Leg Guard Compatible for Royal Enfield Bullet", img: Handelbar, price: "₹6,990"},
        { id: 11, name: "Steel Rear Bike Carrier", img: Handelbar, price: "₹6,990"},
        { id: 12, name: "Airfly Crash Guard For Bullet Enfield Meteor 350 Only", img: Handelbar, price: "₹6,990"},
    ]
    return (
        <div>
            <Container>
                <div>
                    <Row>
                        <Col md={6}>
                            <h6 className='mt-4' onClick={backClick}>Back</h6>
                        </Col>
                        <Col md={6}>
                        <h6 className='text-end mt-4 mb-2'>Classic 350 & 500</h6>

                        </Col>
                    </Row>
                </div>
                <Row>
                {
                    data.map((item) => {
                        return (
                                    <Col md={3} key={item.id} className='text-center'>
                                                       <Card>

                                    <Image src={item.img} alt='products' width='250' height='200' />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    </Card>

                                    </Col>
                        )
                    })
                }
                </Row>
               

            </Container>
        </div>
    )
}

export default classic
