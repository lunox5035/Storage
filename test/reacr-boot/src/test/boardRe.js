/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const boardRe = () => {
    // 데이터 연결
    let Data1 = useFetch("http://localhost:5030/board")
    let [board, setBoard] = useState([])
    useEffect(() => { setBoard([...Data1]); }, [Data1])

    //데이터 분류 (Params)
    const boardNo = useParams();
    let [Data2, setData2] = useState([])
    useEffect(() => {
        setData2(board.filter(x => x.no == boardNo.no))
    }, [board])

    const caRef = useRef(null)
    const tiRef = useRef(null)
    const coRef = useRef(null)


    const [RadioButton, setRadioButton] = useState();

    useEffect(() => {
        Data2.map((test, i) => (
            setRadioButton(test.category)
        ));
    }, [Data2])

    // useEffect(() => { 
    //     const RadioData = String(Data2.category)
    //     setRadioButton([...RadioData]); 
    // }, [Data2])

    // const [RadioButton, setRadioButton] = useState(Data2.category);

    return (
        <>
            <div>
                {Data2.map((test, i) => (
                    <>
                        {/*category 선택창*/}
                        <div >
                            <label>category</label>
                            <br />
                            <label>
                                <input type="radio" name="category" onChange={(e) => setRadioButton('자유')} value="자유"
                                    checked={RadioButton === '자유'} ref={caRef} key={i} />
                                자유
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="category" onChange={(e) => setRadioButton('Q&A')} value="Q&A"
                                    checked={RadioButton === 'Q&A'} ref={caRef} key={i} />
                                Q&A
                            </label>
                            <div key={i}>변화 확인용: {RadioButton}</div>
                        </div>

                        <div>
                            <br />
                            <label>제목</label>
                            <br />
                            <input type="text" key={i} defaultValue={test.title} ref={tiRef} />
                            <br />
                            <label>내용</label>
                            <br />
                            <input type="text" key={i} defaultValue={test.contents} ref={coRef} />
                            <br />

                        </div>
                        <div>

                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default boardRe