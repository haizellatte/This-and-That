import { useEffect, useRef } from 'react';
import styled from "styled-components";
import * as M from "./CommonStyled";
import { Modal } from "./CodeModal.js/Modal"
import HooksCode from "./CodeModal.js/CodeBlocks";

const useClick = onClick => {

    const element = useRef();

    useEffect(() => {
        //1. 해당 ref에 클릭 이벤트를 추가하고
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            //2. 리턴 시 해당 클릭 이벤트를 ref에서 지운다.
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
    }, [])
    return element;
}

const UseClick = () => {
    const todaySong = () => {
        alert("🎵 Cupid - FIFTY FIFTY")
    }
    const title = useClick(todaySong);

    return (
        <>
        <M.ModalContainer>
            <Modal
                hookName={HooksCode.useClick} />
            </M.ModalContainer>
            <M.HookContainer>
            <Text ref={title}>💿 Today song is?</Text>
            </M.HookContainer>
        </>
    );
};

export default UseClick; 

const Text = styled.div`
font-size: 2.6rem;
cursor: pointer;
text-decoration-line: underline;
`; 
