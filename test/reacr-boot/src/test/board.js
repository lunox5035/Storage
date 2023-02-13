import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useFetch from './useFetch'

function board() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cocktail = useFetch("http://localhost:3002/cocktail")

    return (
        <div className='m-5'>

            <Container fluid>
                <h3>
                    <Row className='border-bottom' size="lg">
                        <Col xs={1}> No</Col>
                        <Col> 이름</Col>
                        <Col> 날짜</Col>
                    </Row>
                </h3>
                {cocktail.map(test => (
                    <h3>
                        <Row className='border mt-3 xxl'  >
                            <Col xs={1}> {test.no}</Col>
                            <Col> {test.name}</Col>
                            <Col> 2023-01-31</Col>
                        </Row>
                    </h3>
                ))}
            </Container>

        </div>
    )
}

export default board