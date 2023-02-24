/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

function board() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let Data1 = useFetch("http://localhost:5030/board")

    let [board, setBoard] = useState([])
    let [topHitData, setTopHitData] = useState([])
    let [topFavoriteData, setTopFavoriteData] = useState([])

    useEffect(() => { setBoard([...Data1]); }, [Data1])
    useEffect(() => { setTopHitData([...Data1]); }, [Data1])
    useEffect(() => { setTopFavoriteData([...Data1]); }, [Data1])

    const handleSelect = (e) => {
        setBoard(e.target.value);
    };

    /* useEffect(() => {
        var sortJSON = function(data, key, type) {
            if (type == undefined) {
              type = "asc";
            }
            return data.sort(function(a, b) {
              var x = a[key];
              var y = b[key];
              if (type == "desc") {
                return x > y ? -1 : x < y ? 1 : 0;
              } else if (type == "asc") {
                return x < y ? -1 : x > y ? 1 : 0;
              }
            });
          };
    }) */
    // console.log(arrSort)
    console.log(Data1)

    var sortJSON = function (data, key, type) {
        if (type == undefined) {
            type = "asc";
        }
        return data.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (type == "desc") {
                return x > y ? -1 : x < y ? 1 : 0;
            } else if (type == "asc") {
                return x < y ? -1 : x > y ? 1 : 0;
            }
        });
    };

    // 정렬 데이터
    sortJSON(topHitData, "hit", "desc")
    sortJSON(topFavoriteData, "favorite", "desc")

    //  내림차순 이벤트

    // sortJSON(board, "title", "acs")
    // sortJSON(board, "title", "desc")

    const onSorted = (e) => {
        const sortByValue = e.target.value;

        if (sortByValue === 'asc') {
            sortJSON(board, "title", "acs")
        } else {
            sortJSON(board, "title", "desc")
        }
    };



    return (
        <>
            <div className='border ' style={{ margin: "auto", height: "500px", width: "1400px" }}>
                <h2 className='text-center'> 오늘의 Best 게시글</h2>

                <div style={{ marginLeft: '40%' }}>
                    <table >
                        <h3>
                            <td style={{ margin: "0 auto", width: "Auto" }}>  {/* 변경한 줄 */}
                                <tr>방문 수</tr>
                                <Container>
                                    {topHitData.map((test, i) => {
                                        if (i < 5) {
                                            return (
                                                <tr className='text-start'>
                                                    {i + 1}. <Link to={`/board/${test.no}`}>{test.title}</Link>
                                                </tr>
                                            )
                                        }
                                    })}

                                </Container>
                            </td>
                            <td style={{ margin: "0 auto", width: "Auto" }}>  {/* 변경한 줄 */}
                                <tr>좋아요 수</tr>
                                <Container>
                                    {topFavoriteData.map((test, i) => {
                                        if (i < 5) {
                                            return (
                                                <tr className='text-start'>
                                                    <Link to={`/board/${test.no}`}>{i + 1}. {test.title}</Link>
                                                </tr>
                                            )
                                        }
                                    })}
                                </Container>
                            </td>
                        </h3>
                    </table>
                </div>
            </div>



            <div className='d-flex justify-content-center mt-1'> {/* 필터 버튼 */}
                <button onClick={() => setBoard(Data1)} className='DefaultButton mx-3'>전체</button>
                <button onClick={() => setBoard(Data1.filter(x => x.category === '자유'))} className=' mx-3'>자유</button>
                <button onClick={() => setBoard(Data1.filter(x => x.category === 'Q&A'))} className=' mx-3'>Q&A</button>



                {/* <select name="sorting" id="sorting" onClick={(e) => onSorted}> */}
                <select onChange={onSorted} id="sorting" value={board.title}>

                    <option value="asc"> 오름차순 </option>
                    <option value="desc"> 내림차순 </option>
                </select>



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