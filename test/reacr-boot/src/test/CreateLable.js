import { useRef, useState } from 'react';
import useFetch from './useFetch';

function CreateLable() {
    const cocktail = useFetch("http://localhost:3002/cocktail")

    const [RadioButton, setRadioButton] = useState('alcohol');
    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3002/cocktail/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: noDate,
                no: noDate,
                type: tyRef.current.value,
                name: nameRef.current.value,
                eng_name: enmRef.current.value,
                cocktail_contents: ccRef.current.value,
                recipe_contents: rcRef.current.value,
            }),
        })
        .then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.")
            }
        });
    }

    
    const noDate = Math.max.apply(null, cocktail.map(function(v){return v.no}))+1;
    const tyRef = useRef(null);
    const nameRef = useRef(null);
    const enmRef = useRef(null);
    const ccRef = useRef(null);
    const rcRef = useRef(null);

    return (
        <div>
            {/* 입력페이지 */}
            <span>입력페이지임</span>
            <form onSubmit={onSubmit}>
                <div >
                    <label>type</label>
                    <br />
                    <label>
                        <input type="radio" name="Type" onChange={(e) => setRadioButton('alcohol')} value="alcohol"
                            checked={RadioButton === 'alcohol'} ref={tyRef} />
                        alcohol
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="Type" onChange={(e) => setRadioButton('nonalcohol')} value="nonalcohol"
                            checked={RadioButton === 'nonalcohol'} ref={tyRef} />
                        nonalcohol
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
                    <label>name</label>
                    <input type="text" placeholder="" ref={nameRef} />
                </div>
                <div className='input_area'>
                    <label>eng_name</label>
                    <input type="text" placeholder="" ref={enmRef} />
                </div>
                <div className='input_area'>
                    <label>cocktail_contents</label>
                    <input type="text" placeholder="" ref={ccRef} />
                </div>
                <div className='input_area'>
                    <label>recipe_contents</label>
                    <input type="text" placeholder="" ref={rcRef} />
                </div>
                <button>입력</button>
            </form >
        </div>
    );
}

export default CreateLable
