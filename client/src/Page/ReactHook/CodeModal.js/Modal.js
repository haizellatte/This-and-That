import { useState } from 'react';
import styled from 'styled-components';
import { CopyBlock, dracula } from "react-code-blocks";

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtn = styled.button`
  padding: 15px 20px;
  background-color: #24221b;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn) `
background-color : #24221b;
border-radius: 5px;
margin-bottom: 10px;
padding: 5px 5px;
font-size: 1.2rem;
width: 40px;
height: 40px;
display : flex;
justify-content : center;
align-items : center;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 5px;
  padding : 20px;
  background-color: #ffffffc0;
  /* background-color: #32302aad; */
`;

export const Modal = ({ hookName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen) 
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
        // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        > 코드 보기
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
        </ModalBtn>
        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
        {isOpen ? 
        <ModalBackdrop onClick={openModalHandler}>
          //event 버블링을 막는 메소드 
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>x</ExitBtn>
            <CopyBlock
              language={"jsx"}
              text={hookName}
              theme={dracula}
              wrapLines={true}
              codeBlock />
            </ModalView>
          </ModalBackdrop>
          : null
        }
      </ModalContainer>
    </>
  );
};