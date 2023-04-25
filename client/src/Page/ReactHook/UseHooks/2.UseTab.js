import { useState } from 'react';
import styled from "styled-components";
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const playList = [
    {
        singer: "NCT DREAM - 고래",
        lyrics : `Look around 둘러봐도 온통 짙은 푸른빛 까만 밤 마치 깊은 물에 잠수한 듯이 먹먹함 속에 너의 목소리만 뚜렷해 어쩌지 나에게 넌 달아나는 저 수평선 같지 눈앞에 너를 두고서도 나는 또다시 그리워 너는 파도처럼 나를 삼키지 어쩌지     Oh you and I 넌 아득한 나의 바다 난 너의 품에 빠져 You and I 너에게 가 닿고 싶어 I will dive into you, you, youI will dive into you, you, you I will dive into you 궁금해 네 맘 한가운데 나는 어딘지
표류해 모르는 채 한번 가보는 거지 막막해 가끔 이 마음의 끝은 어딜지 너인지 심각해 널 스치는 바람마저 질투해 네 뺨에 내려앉은 달빛도 annoying me 그보다 더 가까이 내가 곁에 있을래 가까이`
    },
    {
        singer: "The Beatles - I Will",
        lyrics: "Who knows how long I've loved you You know I love you still Will I wait a lonely lifetime If you want me to, I will For if I ever saw you I didn't catch your name But it never really mattered I will always feel the same Love you forever and forever Love you with all my heart Love you whenever we're together Love you when we're apart"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    //playList가 없거나 배열이 아니라면 이무것도 리턴하지 않고, 그냥 빠져나간다.
    if (!allTabs || !Array.isArray(allTabs)) {
        return; 
    } 
    return {
        currentItem: allTabs[currentIndex],
        // changeItem : useTabs(0, playList) <-- index값인 첫번째 인자값을 바꿔주는 함수
        changeItem : setCurrentIndex
    }
}

const UseTab = () => {
    const {currentItem, changeItem} = useTabs(0, playList) // 각각 allTabs[currentIndex]와 setCurrentIndex를 구조분해 할당으로 가져온다.

    return (
        <>
            <M.ModalContainer>
               <Modal
                hookName={HooksCode.useTab} />
            </M.ModalContainer>
        <Container>
            <div>
                <Lyrics>{currentItem.lyrics}</Lyrics>
            </div>
            <div>
            {playList.map((song, index)=> (
                <button key={index} onClick={() => changeItem(index)}>{song.singer}</button>
            ))} 
            </div>    
            </Container>
            
        </>    
    );
};

export default UseTab;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
justify-content: space-evenly;
height: 70%;

> div {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    height: 30%;
} 

button {
    width : 27rem;
    height : 5rem;
    font-size: 1.5rem;
	background-color:  #24221b;
    cursor: pointer;
    color: #e4dcc9;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 5px;

    :hover {
	background-color: #e4dcc9;
	color: #24221b;
}
}
`;

const Lyrics = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 500px;
	width: 950px;
	border: 3px solid #24221b;
	border-radius: 5px;
	position: relative;
	cursor: none;
	max-width: 100%;
    padding : 2rem 2rem;
    font-size: 1.3rem;
    line-height: 2.8rem;
    text-align :  justify;
`;
