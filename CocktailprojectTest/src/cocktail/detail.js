/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css'
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';

function CocktailDetail() {
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cocktail')
            .then((res) => {

                let Data1 = [...res.data];

                /* 
                        let copy = Data1.filter(x => x.no === 2)/* 2는 임시데이터 URL no를 받아올것 */

                setCocktail(copy);
                // setCocktail((prev)=>[cocktail, ...prev]);
            });
    }, []);

    const FilteringDate = no => {
        setCocktail(cocktail.filter(x => x.no === 2))
    }

    console.log("cocktail:" + cocktail)
    console.log("FilteringDate:" + FilteringDate)

    return (
        <>
            <div className='banner'>
                <div style={{ width: '900px', height: '400px', margin: 'auto', position: 'relative', top: '12%', display: 'grid', gridTemplateColumns: '500px 400px', columnGap: '50px' }}>
                    <div style={{ width: '510px', height: '400px', display: 'grid', gridTemplateColumns: '80px 420px', columnGap: '10px' }}>
                        <div style={{ width: '80px', height: '100%' }}>
                            {/* 사진 */}
                        </div>
                        <div style={{ width: '420px', height: '100%' }}>
                            <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_COCK_MASTER/72.Virgin%20Colada.jpg" width='420px' height='400px' style={{ borderRadius: '10px' }}></img>
                        </div>
                    </div>
                    <div style={{ width: '350px', height: '100%' }}>
                        {/* 상세설명 */}
                        {cocktail.map(function (cocktail, i) {
                            return (
                                <div >
                                    <h4>버진 피나 콜라다 Virgin Pina Colada</h4>
                                    <h5>{cocktail.cocktailContents}</h5>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: '15%', paddingRight: '15%', marginTop: '100px' }}>
                <div style={{ marginBottom: '50px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>재료정보</span>
                    <button style={{ padding: '10px', marginLeft: '30px', borderRadius: '10px', border: '2px solid rgb(242, 92, 92)', fontSize: '15px', fontWeight: '500', backgroundColor: 'white' }}> ↻ 단위변경</button>
                </div>
                <div style={{ width: '100%', height: '500px', boxShadow: 'rgb(0 0 0 / 20%) 3px 8px 20px', borderRadius: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '5% 20%' }}>
                        <div style={{ width: '100px', height: '100px', backgroundColor: '#eee', borderRadius: '100px' }}>
                            <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_ITEM_MASTER/007.%EC%BD%94%EC%BD%94%EB%84%9B%EB%B0%80%ED%81%AC80.png" width='100%' height='100%'></img>
                        </div>
                        <div>코코넛밀크</div>
                        <div>음료수</div>
                        <div>30ml</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div style={{ paddingLeft: '15%', paddingRight: '15%', marginTop: '100px' }}>
                <div style={{ marginBottom: '50px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>레시피 설명</span>
                </div>
                <div style={{ width: '100%', height: '500px', boxShadow: 'rgb(0 0 0 / 20%) 3px 8px 20px', borderRadius: '20px' }}></div>
            </div>
        </>
    )
}
export default CocktailDetail;