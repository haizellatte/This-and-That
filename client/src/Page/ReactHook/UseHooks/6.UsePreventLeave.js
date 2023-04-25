import styled from "styled-components";
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        //beforeunload는 returnValue를 반드시 요구한다.
        event.returnValue = "";
    }
    //beforeunload는 window가 닫히기 전에 해당 function이 실행되는걸 허락한다. 
    const protect = () => window.addEventListener("beforeunload", listener);
    const unprotect = () => window.removeEventListener("beforeunload", listener);

    return { protect, unprotect };
}


const UsePreventLeave = () => {
    const { protect, unprotect } = usePreventLeave();

    return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.usePreventLeave} />
            </M.ModalContainer>
            <M.HookContainer>
                <Button onClick={protect} >Are you sure Leaving this Browser?</Button>
                <Button onClick={unprotect} >I'm not protect to Leaving.</Button>
            </M.HookContainer>
        </>
    );
};

export default UsePreventLeave;


const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 35rem;
    height : 5rem;
    font-size: 1.5rem;
	background-color:  #24221b;
    cursor: pointer;
    color: #e4dcc9;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 5px;
    border: 3px solid #24221b;
    margin-bottom : 1rem;

    :hover {
	background-color: #e4dcc9;
	color: #24221b;
}`;


