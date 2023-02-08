/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { ButtonGroup, Stack, ToggleButton } from 'react-bootstrap'
import { Form } from 'react-router-dom';

const fToB = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [cocktail, setCocktail] = useState([]) 

  useEffect(()=>{
    fetch('http://localhost:3002/cocktail')
    .then(res => {
      return res.json();
    })  
    .then(data =>{
      setCocktail(data);
    })
  },[])

  const radios = [
    { name: 'alcohol', value: '1' },
    { name: 'nonalcohol', value: '2' },
  ];

  return (
    <>
      {/* 입력페이지 */}
      <Stack gap={2} className='cen'>
        <text>입력페이지임</text>
        <ul className='upload_ul'>
          <li>
            <text>Type</text><br/>
          <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          </li>
          <li><input className='CSVname' placeholder='name'></input></li>
          <li><input className='CSVeng_name' placeholder='eng_name'></input></li>
          <li><input className='CSVcocktail_contents' placeholder='cocktail_contents'></input></li>
          <li><input className='CSVrecipe_contents' placeholder='recipe_contents'></input></li>
          <li><button className=''>완료</button></li>
        </ul>
      </Stack>

      {/* 출력페이지 */}
      <Stack gap={2} className='cen'>
        <text >출력페이지임</text>
        <table>
          <tbody>
            <tr>
              <td>type</td>
              <td>name</td>
              <td>eng_name</td>
              <td>cocktail_contents</td>
              <td>recipe_contents</td>
            </tr>
            {cocktail.map(test => (
              <tr key={test.no}>
                <td>{test.type}</td>
                <td>{test.name}</td>
                <td>{test.eng_name}</td>
                <td>{test.cocktail_contents}</td>
                <td>{test.recipe_contents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </>
  )
}

export default fToB