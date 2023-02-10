import React from 'react'
import { Link } from 'react-router-dom'

const main = () => {
  return (
    <div>
        <p>메인입니다.</p>
        <Link to='/fToB'>출력페이지</Link>
        <br/>
        <Link to='/CreateLable'>입력페이지</Link>
    </div>
  )
}
export default main