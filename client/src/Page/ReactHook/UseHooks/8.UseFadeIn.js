import {useEffect, useRef} from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

/**
 *  css의 animation을 Hook으로 만들어보자.
 * ! React18에서는 'npm run dev'모드에서는 transtion(fade in)이 정상적으로 작동되지 않은 이슈가 있다. 
 * ! 따라서 최초 렌더링 후, 리렌더링이 되지 않으니 아래 방법을 통해 fade in 여부를 확인하면 된다.
 * 1.`current.style.opacity = 1` 부분 주석 처리 후 새로고침
 * 2. 주석 처리 해제
 */ 

//duration(지속 시간) : 기본 1초 / delay(지연 시간) : 기본 0초
const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1; //! Here !
        }
    }, [])
    return {ref : element, style : {opacity : 0}}
}


const UseFadeIn = () => {
    const elOne = useFadeIn(3, 2);
    const elTwo = useFadeIn(7, 2);

    return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useFadeIn} />
            </M.ModalContainer>
            <M.HookContainer>
                <M.Text {...elOne} fontSize="4rem">First FadeIn</M.Text>
                <M.Text {...elTwo} fontSize="2rem">Second FadeIn</M.Text>
            </M.HookContainer>
        </>

    );
};

export default UseFadeIn;