/* eslint-disable react-hooks/rules-of-hooks */
import { Stack } from 'react-bootstrap'
import useFetch from './useFetch';

const fToB = () => {
  const cocktail = useFetch("http://localhost:3002/cocktail")

  return (
    <>
      {/* 출력페이지 */}
      <div className='m-2'>
        <Stack gap={3} className='cen'>
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
                  <td><pre>{test.recipe_contents}</pre></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Stack>
      </div>
    </>
  )
}

export default fToB