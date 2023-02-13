import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import useFetch from '../useFetch'
import icon from './프로필기본이미지.jpg'

function boardIn() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cocktail = useFetch("http://localhost:3002/cocktail")
    return (

        <>
            <div className='center border d-flex m-5' style={{ height: '700px' }} >
                <div style={{ margin: '0 0 0 200px' }} className='border float-legt w-100 h-100'>
                    <div className='d-flex justify-content-center h-50'>
                        <Image className='h-100' src={icon} fluid />
                    </div>
                    <div className='w-100 h-25  border '>
                        <Row className="justify-content-md-center m-5">

                            {/* 반복문 */}
                            <Col className='border m-4' sm={3} style={{ width: "120px", height: "120px" }} >
                                <Image className='h-100' src={icon} fluid />
                            </Col>

                            <Col className='border m-4' sm={3} style={{ width: "120px", height: "120px" }} >
                                <Image className='h-100' src={icon} fluid />
                            </Col>

                            <Col className='border m-4' sm={3} style={{ width: "120px", height: "120px" }} >
                                <Image className='h-100' src={icon} fluid />
                            </Col>


                        </Row>
                    </div>
                </div>
                <div style={{ margin: '0 200px 0 0' }} className='float-right w-100 mb-0' >
                    <div className='border h-50 m-2 '>
                        <Card border="danger" className="text-center bottom ">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='border h-50 m-2'>
                        <Card border="danger" className="text-center">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <h1 style={{ margin: '0 100px ', border: 'solid' }} >댓글</h1>

            <div style={{ height: '800px' }}>
                <div className='d-flex m-5 d-flex flex-column' style={{ height: '80px' }}>
                    {/* 반복문 : 페이징 10개씩 */}
                    
                    <Card className='w-100 ' border="danger">
                        <Card.Body>
                            <Card.Subtitle>123</Card.Subtitle>
                            <Card.Body><a href='/'>123</a></Card.Body>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </>
    )
}

export default boardIn