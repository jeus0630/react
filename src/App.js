import {useState} from "react";
import './App.css';

function App() {
    const posts = "강남 고기 맛집";

    let [modal, modalChange] = useState(false);
    let [title,titleFunc] = useState(["남자 코트 추천","남자 코트 추천1","남자 코트 추천2"]);
    let [like,likeFunc] = useState(0);

    function changeName(){
        const arr = [...title];
        arr.sort();
        titleFunc(arr);
    }

    function openModal(){
        if(modal) {
            modalChange(false);
            return;
        }

        modalChange(true);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>
            <button onClick={changeName}>버튼</button>
            <div className="list">
                <h3>{ title[0] } <span onClick={()=>{likeFunc(like+=1)}}>👍</span> {like} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ title[1] }</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ title[2] }</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>

            <button onClick={openModal}>버튼</button>

            {
                modal?
                <Modal></Modal>
                : null
            }
        </div>
    );
}

function Modal(){
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;