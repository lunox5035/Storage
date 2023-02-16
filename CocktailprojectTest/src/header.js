/* eslint-disable */
import React, { useState } from "react";
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function Header() {
    return (
      <div className="App">
        <div className='header' style={{paddingLeft:'15%', paddingRight:'15%', marginBottom:'50px'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
            <Link to="/">
              <h1 style={{cursor:'pointer', fontSize:'40px'}}>로고</h1>
            </Link>
            <div>
              <button className='cocktail-btn' style={{float:'right', marginRight:'0px', border:'1px solid black', borderRadius:'5px', fontWeight:'800', backgroundColor:'white', position:'relative', top:'12px'}}>로그인</button>
            </div>
          </div>
  
          <div>
            <div style={{width:'35%', display:'grid', gridTemplateColumns:'90px 70px 85px 1fr 1fr'}}>
              <Link to="/cocktail">
                <div style={{display:'inline-block'}}>
                  <li className='header-menu'>칵테일</li>
                  <div className='header-animationbar'></div>
                </div>
              </Link>
              <Link to="/" style={{maxWidth:'60px'}}>
                <div style={{display:'inline-block'}}>
                  <li className='header-menu'>재료</li>
                  <div className="header-animationbar"></div>
                </div>
              </Link>
              <Link to="/" style={{maxWidth:'60px'}}>
                <div style={{display:'inline-block'}}>
                  <li className='header-menu'>게시판</li>
                  <div className="header-animationbar"></div>
                </div>
              </Link>
              <Link to="/">
                <div style={{display:'inline-block'}}>
                  <li className='header-menu'>시그니처</li>
                  <div className="header-animationbar"></div>
                </div>
              </Link>
              <Link to="/">
                <div style={{display:'inline-block'}}>
                  <li className='header-menu'>클래스</li>
                  <div className="header-animationbar"></div>
                </div>
              </Link>
            </div>
            <input className='header-search' placeholder='만들고 싶은 칵테일 또는 재료를 검색하세요 :)'></input>
          </div>
        </div>
      </div>
    )
}

export default Header;