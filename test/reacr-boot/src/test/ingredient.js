/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

function ingredient() {

  // const Data1 = useFetch("http://localhost:4030/ingredient")
  const Data1 = useFetch("http://192.168.0.4:8080/ingredient")
  let [cocktail, setCocktail] = useState([])

  useEffect(() => { setCocktail(Data1) }, [Data1])

  const handleSelect = (e) => {
    setCocktail(Data1.filter(x => x.type === e.target.value));
  }

  const categoryList = ["strong", "weak", "beverage", "juice", "fruit", "other"]
  /* 모든 데이터에서 props에 있는 재료 정보 취득
   그후 필터링 결과물을 배열화 
    */

  return (
    <>
      <div className='d-flex justify-content-center mt-1'>
        <button onClick={() =>
          setCocktail(Data1)}
          className='defaultButton mx-3'>
          전체
        </button>

        <select onChange={handleSelect} value={cocktail.type}>

          {categoryList.map((test) => (
            <option value={test} key={test}>
              {test}
            </option>
          ))}
        </select>
      </div>

      <div className='m-5'>
        <Row>
          <Col xs={1} />
          <Col xs={10} >
            <h3 className='text-center'>
              <div class="d-flex">
                <div className=' w-100' style={{ height: "67px",borderBottom:"2px solid" }}>

                  <Row>
                    <Col xs={4}> 이름</Col>
                    <Col xs={4}> 영문이름</Col>
                    <Col xs={2}> 종류</Col>
                    <Col xs={2}> 용량</Col>
                  </Row>
                </div>
              </div>
            </h3>
            {cocktail.map((test, i) => (
              <h3 className='text-center' key={i}>

                <div class="d-flex">
                  {/* 사진 */}
                  <div style={{ height: "67px" }}>
                    <p>{test.id}</p>
                  </div>

                  {/* 내용 */}
                  <div className='border w-100' >

                    <Link to={`/ingredient/${test.no}`} style={{ textDecoration: 'none', textDecorationColor: "black" }}>
                      <Row>
                        <Col xs={4}> {test.name}</Col>
                        <Col xs={4}> {test.engName}</Col>
                        <Col xs={2}> {test.type}</Col>
                        <Col xs={2}> {test.degree}</Col>
                      </Row>
                    </Link>
                  </div>
                </div>
              </h3>
            ))}
            <Col xs={1} />
          </Col>
        </Row>
      </div >
    </>
  )
}

export default ingredient