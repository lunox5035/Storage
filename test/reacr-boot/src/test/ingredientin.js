/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import useSelect from './useSelect'

function ingredientin() {

    const ingredient = useFetch("http://localhost:4030/ingredient")
    // const cocktail = Data1.filter(x => x.no === 2) /* no, id 받아오기 */

    const ingredientNo = useParams();
    // const cocktail = Data1.filter(x => x.no == no.no)

    // console.log(cocktail)
    // console.log(no)
    // console.log(no.no)

    // const Fdata = useSelect(ingredientNo)

    const Fdata = ingredient.filter(x => x.no == ingredientNo.no)

    return (

        <>
            <h1 style={{ margin: '0 100px ' }} >해당 재료로 만들 수 있는 칵테일</h1>

            <div className=' m-5'>

                <div className='mt-1'>
                    <Row style={{ margin: '0 10%' }}>
                        {/* if(Fdata === []) {
                            <Link to={'/ingredient'}>
                                <p>준비중입니다</p>
                            </Link>
                        }else{ */}
                        {Fdata.map(test => {
                            return (
                                // <p>{test.cocktailRecipes.no}</p>
                                test.cocktailRecipes.map(test2 => {
                                    return (
                                        test2.cocktail.map(test3 => {
                                            return (
                                                <Col xs={2} className='text-center' style={{ height: "150px", boxShadow: "2px 2px 2px 2px gray " }}>
                                                    <Link to={`/cocktail/${test3.no}`}>
                                                        <center>
                                                            <img
                                                                className="d-block "
                                                                style={{ width: "90px",height: "90px", borderRadius: "70%", overflow: "hidden" }}
                                                                src={test3.cocktailImages[0].url}
                                                                alt="Third slide" />
                                                        </center>
                                                        <p>{test3.name}</p>
                                                    </Link>
                                                </Col>
                                            )
                                        })
                                    )
                                })
                            )
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ingredientin