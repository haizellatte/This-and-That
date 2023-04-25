import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

//Todo | useInput Hook : Input의 기본값 설정
const useInput = (initialValue, validator) => { //여기서 validator는 함수이다.
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        //2. Input의 유효성을 검증할 수 있다.
        let valid = true;
        if (typeof validator === "function") {
            valid = validator(value);  // 이때 validator(value)는 Boolean 값이다.
        }
        //valid가 유효하다면 input의 value값을 바꿔준다. 즉 validator(value)가 false라면 작성되지 않는다.
        if (valid) {
            setValue(e.target.value);
        }
    };
    return {value, onChange}
};

const UseInput = () => {
    //2. validator 함수를 만든다.
    const maxLen = ((value) => value.length < 6);
    //1. Input의 기본값을 설정할 수 있다. -> 필수 입력 값으로, 사용자의 편의를 도울 수 있는 값들
    const time = useInput("AM. ");
    const pwd = useInput("", maxLen)
    
    const focusInput = useRef();

    useEffect(() => {
        focusInput.current.focus();
    },[])


    return (
        <>
            <M.ModalContainer>
                    <Modal
                        hookName={HooksCode.useInput} />
                    </M.ModalContainer>
            <Container>
                <div>
                    <Title>💭 진료 예약 시간을 입력해주세요.</Title>
                    <Input {...time} ref={focusInput } />
                    <span>예시 : AM. 12:30</span>
                </div>
                <div>
                    <Title>💭 예약확인 할 비밀번호를 입력해주세요.</Title>
                    <Input {...pwd} placeholder="* * * * * *" />
                    <span>비밀번호는 6자리 이하로 입력해주세요.</span>
                </div>
            </Container>
            
        </>
    );
};

export default UseInput;

const Container = styled.div`
${({theme}) => theme.flex.flexBox('column')};
justify-content: space-evenly;
padding : 5rem 2rem;
width: 100%;

> div {
    ${({theme}) => theme.flex.flexBox('column')};
    justify-content: space-evenly;
    padding : 10rem 0;
}   
`;

const Title = styled.div`
font-size : ${({theme}) => theme.fontSize.title};
padding-bottom: ${({theme}) => theme.length.sm};
`
const Input = styled.input.attrs({
    classname: "input"
})`
    font-size : ${({ theme }) => theme.fontSize.subTitle};
    margin-bottom : ${({theme}) => theme.length.sm};
    padding : 1rem 1rem;
    width : 30rem;
    height : 4rem;
`;
