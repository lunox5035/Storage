/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

function board() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let Data1 = useFetch("http://localhost:5030/board")
    let [board, setBoard] = useState([])

    useEffect(() => {setBoard(Data1) }, [Data1])

    return (

        <>

            <div className='border ' style={{ margin: "auto", height: "500px", width: "1400px" }}>
                <h2 className='text-center'> 오늘의 Best 게시글</h2>

                <div>
                    <h3>
                        <Row className='my-5'>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                1
                            </Col>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                6
                            </Col>
                            <Col xs={2} />
                        </Row>
                        <Row className='my-5'>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                2
                            </Col>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                7
                            </Col>
                            <Col xs={2} />
                        </Row>
                        <Row className='my-5'>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                3
                            </Col>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                8
                            </Col>
                            <Col xs={2} />
                        </Row>
                        <Row className='my-5'>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                4
                            </Col>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                9
                            </Col>
                            <Col xs={2} />
                        </Row>
                        <Row className='my-5'>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                5
                            </Col>
                            <Col xs={2} />
                            <Col className='border' style={{ boxShadow: "2px 2px 2px 2px gray " }}>
                                10
                            </Col>
                            <Col xs={2} />
                        </Row>
                    </h3>
                </div>
            </div>


            <div className='d-flex justify-content-center mt-1'> {/* 필터 버튼 */}
                <button onClick={() => setBoard(Data1)} className='DefaultButton mx-3'>전체</button>
                <button onClick={() => setBoard(Data1.filter(x => x.category === '자유'))} className=' mx-3'>자유</button>
                <button onClick={() => setBoard(Data1.filter(x => x.category === 'Q&A'))} className=' mx-3'>Q&A</button>
            </div>
            <div className='d-flex justify-content-end'>
                <button><a href='/CreateLable'>추가</a></button>
            </div>
            {/* 내용  그리드 */}
            <div className='m-5'>
                <Row>
                    <Col xs={1} />
                    <Col xs={10} >
                        {board.map((test, i) => (
                            <h3 className='text-center' key={i}>
                                <div className="d-flex align-items-center" style={{ float: "left", height: "67px" }}>                            <p>{test.no}</p>
                                </div>
                                <div className='border' >
                                    <Link to="/boardIn" style={{ textDecoration: 'none', textDecorationColor: "black" }}>
                                        <Row className='mt-3 xxl'>

                                            <Col xs={1}> {test.category}</Col>
                                            <Col xs={6} className='text-start'> {test.title}</Col>
                                        </Row>
                                        <Row className='xxl'>
                                            <Col xs={1}> {test.user_no}</Col>
                                            <Col xs={2}> {test.reg_date}</Col>
                                            <Col xs={2}> v:{test.hit}</Col>
                                            <Col xs={2}> H:{test.favorite}</Col>

                                        </Row>
                                    </Link>
                                </div>
                            </h3>
                        ))}
                    </Col>
                    <Col xs={1} />
                </Row>
            </div >
        </>
    )
}

export default board