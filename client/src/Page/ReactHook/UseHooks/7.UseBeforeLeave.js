import { useEffect } from 'react';
import styled from "styled-components";
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const useBeforeLeave = onBefore => {

    const handle = (event) => {
        //clientY : 사용자의 마우스가 위치한 세로축. Y < 0 이라면 사용자의 마우스가 브라우저를 벗어나 위쪽(탭)을 향해 있다는 말이다.
        const { clientY } = event;
        // 사용자의 마우스가 위쪽을 향할 때만 
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        return () => document.removeEventListener("mouseleave", handle);
    }, []) //한번만 반복하겠금

    if (typeof onBefore !== "function") {
        return;
    };
}


const UseBeforeLeave = () => { 
    const message = () => alert("💸 더 나은 가격 프로모션을 준비했어요 !"); 
    useBeforeLeave(message);

    return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useBeforeLeave} />
            </M.ModalContainer>
            <M.HookContainer>
                <Text>💲 가격 프로모션 안내</Text>
                <SubText>브라우저를 떠나 보세요!</SubText>
            </M.HookContainer>
        </>
    );
};

export default UseBeforeLeave;

const Text = styled.div`
font-size: 3rem;
font-weight: 600;
margin-bottom: 2rem;
`;

const SubText = styled.div`
font-size: 1.7rem;
text-decoration-line : underline;
`;

