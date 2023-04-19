import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Main = () => {    
    // const handleColorChange = (num) => {
    //     if (num === 1) {
    //         document.getElementById("backgound").style.backgroundColor ="#f443365c";
    //     }
    //     if (num === 1) {
    //         document.getElementById("backgound").backgroundColor = "##e91e6251";
    //     }
    //     if (num === 1) {
    //         document.getElementById("backgound").backgroundColor = "#9b27b05f";
    //     }
    //     if (num === 1) {
    //         document.getElementById("backgound").backgroundColor = "#2195f35c";
    //     }
    //     if (num === 1) {
    //         document.getElementById("backgound").backgroundColor = "#4caf4f56";
    //     }
    //     if (num === 1) {
    //         document.getElementById("backgound").backgroundColor = "#ff990053";
    //     }
    // }
    // onMouseEnter={handleColorChange(2)}

    return (
        <>
            <Wrapper id="backgound" >
                <Container>
                    <HeadText>Haizel's Archive</HeadText>
                    <Buttons>
                        <Link to="/budget">
                            <Button color="#f44336">Budget</Button>
                        </Link>
                        <Link to="/reactHooks">
                            <Button color="#e91e63">ReactHooks</Button>
                        </Link>
                        <Button color="#9c27b0"/>
                        <Button color="#2196f3"/>
                        <Button color="#4caf50"/>
                        <Button color="#ff9800"/>
                    </Buttons>
                </Container>    
            </Wrapper>  
        </>
    );
};

export default Main;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%; 
width: 100%;
position: absolute;
top: 0;
left: 0;

::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .5s ease;
    background: #f44336;
    opacity: .1;
}
`;

const Container = styled.div`
display: flex;
height: 50rem;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
`;

const HeadText = styled.div`
font-family: 'Signika Negative', sans-serif;
font-weight: 600;
text-shadow: 1.5px 1px 4px gray;
color : #fff;
font-size: 5rem;
`

const Buttons = styled.div`
display: grid;
align-items: center; 
justify-content: center;
grid-template-columns: repeat(3, 1fr);

@media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
}
`;

const Button = styled.button.attrs({
    classname : "button"
})`
font-family: 'Montserrat', sans-serif;
font-weight: 600;
background: ${(props) => props.color};
color : #fff;
font-size: 1.3rem;
width: 10vw;
height: 10vw;
min-width: 5em;
min-height: 5em;
transition: .5s all ease;
border: 0 solid transparent;
border-radius: 50%;
margin: .5em;
opacity: .7;

:hover {
opacity: 1;
cursor: pointer;
border: calc(2px + .85vw) solid rgba(255, 255, 255, .5);
transition:
.5s background-color ease,
.2s border ease;
}
`;

// 참고 css : https://wsss.tistory.com/574