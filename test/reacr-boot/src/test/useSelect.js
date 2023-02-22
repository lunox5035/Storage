/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import { useEffect, useState } from "react"
import useFetch from "./useFetch";

export default function useSelect(ingredientNo) {     //no는 url의 param이다
    const [data, setData] = useState([])

    const 레시피 = useFetch("http://localhost:6030/recipe")

    const 칵테일 = useFetch("http://localhost:3030/cocktail")

    const 필터링 = 레시피.filter(x => x.ingredient_no == ingredientNo.no)

    console.log(필터링);
    //레시피 데이터 안에서 재료(no)를 가지고 있는 데이터만 추출

    useEffect(() => {
        칵테일.map(test => {
             setData(필터링.filter((x) => test.cocktail_no == x.no))
        })

        // const data = _.keyBy(레시피, 'cocktail_no')

        // const data2 = 칵테일.cocktail.map((test) => ({
        //     ...data[test.cocktail_no],
        //     칵테일: test.no,
        // }))

        // const data3 = data2.filter(test => test.ingredient_no == ingredientNo)


    }, [레시피, 칵테일])
    return data
}
