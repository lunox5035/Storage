import { useRef, useState } from 'react';
import useFetch from './useFetch';

function CreateLable() {
    const cocktail = useFetch("http://localhost:3030/cocktail")

    const [RadioButton, setRadioButton] = useState('자유');
    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3030/cocktail/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: noDate,
                no: noDate,
                category: caRef.current.value,
                title: tiRef.current.value,
                contents: ctRef.current.value,
                hit: hitRef.current.value,
                reg_date: rdRef.current.value,
                favorite: faRef.current.value,
                user_no: unRef.current.value,
            }),
        })
        .then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.")
            }
        });
    }
    
    const noDate = Math.max.apply(null, cocktail.map(function(v){return v.no}))+1;
    const caRef = useRef(null);
    const tiRef = useRef(null);
    const ctRef = useRef(null);
    const hitRef = useRef(null);
    const rdRef = useRef(null, Date());
    const faRef = useRef(null);
    const unRef = useRef(null);

    return (
        <div>
            {/* 입력페이지 */}
            <span>입력페이지임</span>
            <form onSubmit={onSubmit}>
                <div >
                    <label>category</label>
                    <br />
                    <label>
                        <input type="radio" name="category" onChange={(e) => setRadioButton('자유')} value="자유"
                            checked={RadioButton === '자유'} ref={caRef} />
                        자유
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="category" onChange={(e) => setRadioButton('Q&A')} value="Q&A"
                            checked={RadioButton === 'Q&A'} ref={caRef} />
                        Q&A
                    </label>
                    <div>변화 확인용: {RadioButton}</div>
                </div>
                <div className='input_area'>
                    {/*
                    <label>Type</label>
                    <select>
                        {cocktail.map(Date => (
                            <option key={Date.type} value={Date.type} ref={tyRef}>
                                {Date.type}
                            </option>
                        ))}
                    </select>
                    */}


                </div>
                <div className='input_area'>
                    <label>title</label>
                    <input type="text" placeholder="" ref={tiRef} />
                </div>
                <div className='input_area'>
                    <label>eng_name</label>
                    <input type="text" placeholder="" ref={ctRef} />
                </div>
                <div className='input_area'>
                    <label>cocktail_contents</label>
                    <input type="text" placeholder="" ref={hitRef} />
                </div>
                <div className='input_area'>
                    <label>recipe_contents</label>
                    <input type="text" placeholder="" ref={faRef} />
                </div>
                <div className='input_area'>
                    <label>recipe_contents</label>
                    <input type="text" placeholder="" ref={unRef} />
                </div>
                <button>입력</button>
                <button><a href='/board'> 이전</a></button>
            </form >
        </div>
    );
}

export default CreateLable
