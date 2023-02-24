/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const boardIn = () => {

    let Data1 = useFetch("http://localhost:5030/board")

    let [board, setBoard] = useState([])
    useEffect(() => { setBoard([...Data1]); }, [Data1])

    return (
        <div>
            {board.map(test => (
                <tr>
                    <td> {test.type}</td>
                    <td>{test.title}</td>
                </tr>
            ))}
        </div>
    )
}

export default boardIn