/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function boardIn(props) {
    // 데이터 연결
    const boardNo = Number(useParams().no);
    const token = props.token;

    //데이터 받아오기(조회수 증가)
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`/board/view/${boardNo}`)
            .then((res) => {
                const data0 = res.data;
                console.log("#########: ", data0);
                setData(data0);
            })
            .catch((error) =>
                console.error("error" + error))
    }, []);

    console.log(Data)
    console.log(typeof Data)
    console.log(Data.reviews)
    console.log(Data.no)

    // 본문 삭제 
    const onRemove = (event) => {
        event.preventDefault();
        if (confirm("정말 삭제합니까?")) {
            fetch(`/board/delete/${boardNo}`, {
                method: "DELETE"
            })
                .then(res => {
                    if (res.ok) {
                        alert("삭제되었습니다.");
                        location.href = '/board'; // 브라우저 캐시를 비우기 위해 페이지를 다시 로드하세요.
                    } else {
                        throw new Error(`${res.status} (${res.statusText})`);
                    }
                })
                .catch(error => console.error(`실행 중 오류가 발생했습니다: ${error}`));
        } else {
            alert("취소되었습니다.");
        }
    };

    //댓글 입력
    const reRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        if (confirm("댓글을 입력 하시겠습니까?")) {
            fetch(`/board/view/${boardNo}/review/write`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    // user_no: boardNo, 
                    // board_no: boardNo,
                    contents: reRef.current.value,
                    // createdDate: Date(),
                    // modifiedDate: Date()
                }),
            })
                .then(res => {
                    if (res.ok) {
                        alert("입력이 완료되었습니다.");
                        location.href = `/board/view/${Data.no}`; // 브라우저 캐시를 비우기 위해 페이지를 다시 로드하세요.
                    } else {
                        throw new Error(`${res.status} (${res.statusText})`);
                    }
                })
                .catch(error => console.error(`저장 중 오류가 발생했습니다: ${error}`));
        } else {
            alert("취소되었습니다.");
        }
    }

    // 댓글 삭제 
    const onRemove2 = (event, app) => {
        event.preventDefault();
        if (confirm("정말 삭제합니까?")) {
            // fetch(`/board/view/${boardNo}/review/delete/${app.no}`, {
            fetch(`/board/view/${boardNo}/review/delete/${app.no}`, {
                method: "DELETE"
            })
                .then(res => {
                    if (res.ok) {
                        alert("삭제되었습니다.");
                        location.href = `/board/view/${boardNo}`; // 브라우저 캐시를 비우기 위해 페이지를 다시 로드하세요.
                    } else {
                        throw new Error(`${res.status} (${res.statusText})`);
                    }
                })
                .catch(error => console.error(`실행 중 오류가 발생했습니다: ${error}`));
        } else {
            alert("취소되었습니다.");
        }
    };

    //날짜 변환
    function formatDate(dateString) {
        const date = new Date(Date.parse(dateString))
        const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        return formattedDate;
    }

    const isLoggedIn = props;

    // 좋아요 버튼 (false일때에는 하얀하트, true일때에는 빨간하트)
    const [isLiked, setIsLiked] = useState(false);

    // 좋아요 개수 저장 (버튼 클릭 시 실시간으로 좋아요 개수를 반영하기 위한 state)
    const [countLiked, setCountLiked] = useState([]);

    // 클릭시 하트상태 반전
    const handleLikeClick = async (e) => {
        // 로그인 시에만 click이벤트 작동
        if (isLoggedIn) {
            await axios.post(`/cocktail/like/${boardNo}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(() => {
                // Click이벤트 발생 시, 하트상태 반전을 위한 데이버를 서버에서 불러옴
                axios.get(`/cocktail/isliked/${boardNo}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    const liked = res.data; // 서버에서 회원의 좋아요정보 요청 => true or false
                    setIsLiked(liked); // true or false를 isLiked state에 저장
                    console.log("좋아요 데이터 가져오기 성공: " + liked);
                }).catch((err) => {
                    console.log("좋아요 데이터 가져오기 실패ㅠㅠ");
                    console.log(err)
                })
                // console.log("좋아요 서버전달 성공!");
            }).catch((err) => {
                // console.log("좋아요 서버전달 실패!");
                console.log(err);
            });

            // Click이벤트 발생 시, 실시간으로 숫자를 반영
            axios.get(`/cocktail/countliked/${boardNo}`)
                .then((res) => {
                    const counted = res.data;
                    setCountLiked(counted);
                    console.log("좋아요 카운트데이터 가져오기 성공: " + counted);
                }).catch((err) => {
                    console.log("좋아요 카운트데이터 가져오기 실패ㅠㅠ");
                    console.log(err)
                });
        } else {
            // 비로그인 시, Click이벤트 막음
            e.preventDefault();
        }
    }

    // 렌더링 할때마다, 예전에 좋아요 버튼 클릭했다면 ♥으로 고정, 안했다면 ♡으로 고정... 서버에서 데이터를 불러옴
    useEffect(() => {
        axios.get(`/cocktail/isliked/${boardNo}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            const liked = res.data;
            setIsLiked(liked);
            console.log("좋아요 데이터 가져오기 성공: " + liked);
        }).catch((err) => {
            console.log("좋아요 데이터 가져오기 실패ㅠㅠ");
            console.log(err)
        })
    }, []);

    // 렌더링 할때마다, 실시간으로 숫자를 반영
    useEffect(() => {
        axios.get(`/cocktail/countliked/${boardNo}`)
            .then((res) => {
                const counted = res.data;
                setCountLiked(counted);
                console.log("좋아요 카운트데이터 가져오기 성공: " + counted);
            }).catch((err) => {
                console.log("좋아요 카운트데이터 가져오기 실패ㅠㅠ");
                console.log(err)
            })
    }, [countLiked]);

    return (
        <>
            <div>
                {/* 상단 정보창 */}
                <div>
                    <table>
                        <tr>
                            <td>①{Data.category}</td>
                            <td>②{Data.title}</td>
                        </tr>
                        <tr>
                            <td>③{Data?.member?.nickname || ""}</td>
                            <td>④{formatDate(Data.createdDate)} ⑤ {Data.hit} ⑥ {Data.likes}</td>
                            <td style={{ width: "10%" }}>
                                <button><Link to={`/board/updata/${Data.no}`}>수정</Link></button>
                                <button onClick={onRemove}>삭제</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* 이미지창 */}
                <div>

                </div>
                {/* 콘텐츠창 */}
                <div style={{ minHeight: "800px" }}>
                    {/* {Data.contents} */}
                    <div dangerouslySetInnerHTML={{ __html: Data.contents }}></div >
                </div>
                {/* 좋아요 버튼 */}
                {/* <div style={{ textAlign: "center" }}>
                    <button
                        type='button'
                        style={{ height: '100px', width: '100px', borderRadius: '50px' }}
                    // onClick={(e) => handleClick(e, Data)}
                    >
                        좋아요
                    </button>
                </div> */}
                <div className="cocktail-ingredient-image" style={{ marginLeft: '0%', marginTop: '3%', cursor: isLoggedIn ? 'pointer' : 'default' }} onClick={handleLikeClick}>
                    <div className="cocktail-banner-box-contents-favorite">
                        {isLiked ? '♥' : '♡'}
                    </div>
                    <div className="cocktail-banner-box-contents-favorite" style={{ fontSize: '25px', marginTop: '-15px' }}>{countLiked}</div>
                </div>
                {/* 댓글창 */}
                <div>
                    <p className="text-center">
                        <h4>댓글</h4>
                    </p>
                    <div style={{ margin: "auto" }}>
                        <form onSubmit={onSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <input style={{ width: "75%", height: "40px" }} placeholder="댓글창" ref={reRef} />
                            <button style={{ width: "10%", height: "40px" }}>작성</button>
                        </form>
                    </div>
                    {/* 댓글창 view */}
                    <table className='border text-center' style={{ margin: "auto" }}>
                        {Data && Data.reviews &&
                            <tbody>
                                {Data.reviews.map(app => {
                                    return (
                                        <tr>
                                            <td>{app.no}</td>
                                            <td>{app.contents}</td>
                                            <td>{app.createdDate}</td>
                                            <td style={{ width: "10%" }}>
                                                <button onClick={(e) => onRemove2(e, app)}>삭제</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default boardIn
