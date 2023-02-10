/* eslint-disable react-hooks/rules-of-hooks */
import { Stack } from 'react-bootstrap'
import useFetch from './useFetch';

const fToB = () => {
  const cocktail = useFetch("http://localhost:3002/cocktail")
  
  return (
    <>
      {/* 출력페이지 */}
      <Stack gap={4} className='cen'>
        <p >출력페이지임</p>
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