import {useState} from "react";
import './App.css';

function App() {
    const posts = "강남 고기 맛집";

    let [modal, modalChange] = useState(false);
    let [title, titleFunc] = useState(["남자 코트 추천", "남자 코트 추천1", "남자 코트 추천2"]);
    let [like, likeFunc] = useState(0);
    let [clickedTitle, clickedTitleFunc] = useState(0);
    let [inputValue,inputValueFunc] = useState('');


    function changeName() {
        const arr = [...title];
        arr.sort();
        titleFunc(arr);
    }

    function openModal() {
        modalChange(!modal);
    }

    function btnClick(idx){
        clickedTitleFunc(idx);
    }

    function save(){
        const arr = [...title];
        arr.unshift(inputValue);
        titleFunc(arr);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>
            <button onClick={changeName}>버튼</button>
            {
                title.map((el,idx) => {
                    return (<div className="list" key={idx}>
                        <h3 onClick={ ()=>{btnClick(idx); openModal();}}>{el} </h3>
                        <p>2월 17일 발행</p>
                        <hr/>
                    </div>)
                })
            }

            <div>
                HTML 잔뜩 있는 곳
                <div className="publish">
                    <input onChange={(e)=>{inputValueFunc(e.target.value)}}/>
                    <button onClick={save}>저장</button>
                </div>
            </div>

            <button onClick={openModal}>버튼</button>

            {
                modal ?
                    <Modal title={title} clickedTitle={clickedTitle}></Modal>
                    : null
            }
        </div>
    );
}

function Modal(props) {
    console.log(props);
    return (
        <div className="modal">
            <h2>{props.title[props.clickedTitle]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;