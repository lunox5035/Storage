import React from 'react'
import { Card, Carousel, Col, Image, Row } from 'react-bootstrap'
import useFetch from '../useFetch'
import icon from './프로필기본이미지.jpg'
import bgi from './하트.png'

function boardIn() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Data = useFetch("http://localhost:3002/cocktail")
    const cocktail = Data.filter(x => x.no === 2) /* no, id 받아오기 */

    return (

        <>
            <div className='border d-flex m-5' style={{ height: '700px' }} >
                <div style={{ margin: '0 0 0 200px' }} className='border float-legt w-100 h-100'>
                    <div className='h-50'>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-75"
                                    style={{ margin: 'auto' }}
                                    src={icon}
                                    alt="First slide"
                                />

                            </Carousel.Item>

                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-75"
                                    style={{ margin: 'auto' }}
                                    src={bgi}
                                    alt="Second slide"
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    style={{ margin: 'auto' }}
                                    src={icon}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='w-100 h-25 ' style={{ margin: "200px 0 0 0" }}>
                        <Row className="justify-content-md-center m-1">

                            {/* 반복문 */}
                            <Col xs={1} className=' border m-4' style={{ width: "100px", height: "100px" }} >
                                <Image className='h-100' src={icon} fluid />
                            </Col>
                            <Col xs={1} className='border m-4' style={{ width: "100px", height: "100px" }} >
                                <Image className='h-100' src={bgi} fluid />
                            </Col>
                            <Col xs={1} className='border m-4' style={{ width: "100px", height: "100px" }} >
                                <Image className='h-100' src={icon} fluid />
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: '0 200px 0 0' }} className='float-right w-100 mb-0' >
                    <div className='border h-75 m-2 '>
                        {cocktail.map(test => (
                            <Card border="danger" className="h-100 ">
                                <Card.Body>
                                    <Card.Title className='my-5'><h3>{test.name} {test.eng_name}</h3></Card.Title>
                                    <Card.Text className='my-5'> <h5>{test.cocktail_contents}</h5></Card.Text>
                                    <Card.Subtitle className="m-5 text-muted border">도수 : 50</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div>
                        <div
                            style={{
                                margin: "auto",
                                width: "100px",
                                height: "100px",
                                borderRadius: "50px",
                                backgroundImage: `url(${bgi})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '80px 80px',
                            }}
                            className="border ">

                            <pre className='text-center' style={{ marginTop: "25px", backgroundImage: `url("bgi")` }}>
                                좋아요:<br />
                                50
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <h1 style={{ margin: '0 100px ', border: 'solid' }} >재료 정보</h1>

            <div style={{ height: '800px' }} className=' m-5'>
                {cocktail.map(test => (
                    <div className='mt-1'>
                        <Row style={{ height: "100px", margin: '0 10%' }} className="pill bg-light">
                            <Col>
                                <center>
                                    <img
                                        className="d-block "
                                        style={{ width: "90px", borderRadius: "70%", overflow: "hidden" }}
                                        src={icon}
                                        alt="Third slide"
                                    />
                                </center>
                            </Col>
                            <Col className='text-end'>
                                재료
                            </Col>
                            <Col>
                                타입
                            </Col>
                            <Col className='text-end'>
                                용량
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>

            <h1 style={{ margin: '0 100px ' }} >레시피 정보</h1>

            <div style={{ height: '800px' }} className=' m-5'>
                {cocktail.map(test => (
                    <div className='mt-1 pill bg-light' style={{ margin: "0 10%" }}>
                        <pre className='text-center fs-1'>
                            {test.recipe_contents}
                        </pre>
                    </div>
                ))}
            </div>
        </>
    )
}

export default boardIn