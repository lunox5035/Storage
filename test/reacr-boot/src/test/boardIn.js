import React from 'react'
import { Card, Carousel, Col, Image, Row } from 'react-bootstrap'
import useFetch from './useFetch'
import bgi from './db/하트.png'

function boardIn() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Data1 = useFetch("http://localhost:3030/cocktail")
    const cocktail = Data1.filter(x => x.no === 2) /* no, id 받아오기 */

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ingredient = useFetch("http://localhost:4030/ingredient")


    return (

        <>
            <div className=' d-flex m-5' style={{ height: '700px' }} >
                <div style={{ margin: '0 0 0 10%', boxShadow: "2px 2px 2px 2px gray " }} className='border float-legt w-100 h-100'>
                    <div className='h-50'>
                        <Carousel>

                            {cocktail.map(test => {
                                return (
                                    test.images.map(app => {
                                        return (
                                            <Carousel.Item interval={1000}>
                                                <img
                                                    className="d-block w-75"
                                                    style={{ margin: 'auto' }}
                                                    src={app.url}
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                        )
                                    })
                                )

                            })}
                        </Carousel>
                    </div>
                    <div className='w-100 h-25 ' style={{ margin: "200px 0 0 0" }}>
                        <Row className="justify-content-md-center m-1">
                            {/* 반복문 */}
                            {cocktail.map(test => {
                                return (
                                    test.images.map(app => {
                                        return (
                                            <Col xs={1} className=' border m-4' style={{ width: "100px", height: "100px" }} >
                                                <Image className='h-100' src={app.url} fluid />
                                            </Col>
                                       )
                                    })
                                )

                            })}
                           
                        </Row>
                    </div>
                </div>

                <div style={{ margin: '0 10% 0 0' }} className='float-right w-100 mb-0 border' >
                    <div className=' h-75 mx-2 '>
                        {cocktail.map((test) => {
                            return (
                                <Card border="danger" style={{ boxShadow: "2px 2px 2px 2px gray ", height: "500px" }} lassName="h-100 ">
                                    <Card.Body>
                                        <Card.Title className='my-5'><h3>{test.name} {test.eng_name}</h3></Card.Title>
                                        <Card.Text className='my-5'> <h5>{test.cocktail_contents}</h5></Card.Text>
                                        <Card.Subtitle className="m-5 text-muted border text-c" >도수 : 50</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            )
                        })}
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

            <h1 style={{ margin: '0 100px ' }} >재료 정보</h1>

            <div className=' m-5'>
                {ingredient.map(test => (
                    <div className='mt-1'>
                        <Row style={{ height: "100px", margin: '0 10%', boxShadow: "2px 2px 2px 2px gray " }} className="pill bg-light mb-3">
                            <Col>
                                <center>
                                    <img
                                        className="d-block "
                                        style={{ width: "90px", borderRadius: "70%", overflow: "hidden" }}
                                        src={test.url}
                                        alt="Third slide"
                                    />
                                </center>
                            </Col>
                            <Col className='text-end'>
                                {test.name}
                            </Col>
                            <Col>
                                {test.type}
                            </Col>
                            <Col className='text-end'>
                                {test.degree}
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>

            <h1 style={{ margin: '0 100px ' }} >레시피 정보</h1>

            <div className=' m-5'>
                {cocktail.map(test => (
                    <div className='mt-1 pill bg-light' style={{ margin: "0 10%", boxShadow: "2px 2px 2px 2px gray " }}>
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