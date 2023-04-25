import { useEffect, useState } from 'react';
import styled from "styled-components";
import * as M from "./CommonStyled";
import { Modal } from "./CodeModal.js/Modal"
import HooksCode from "./CodeModal.js/CodeBlocks";

const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    return setTitle;
    }

const UseTitle = () => {
    const titleUpdater = useTitle("Loading...");

    setTimeout(() => titleUpdater("Kirby is Here!"), 1000); 

    return (
        <>
            <M.ModalContainer>
                    <Modal
                        hookName={HooksCode.useTitle} />
            </M.ModalContainer>
            <M.HookContainer>

            <Text>Tab Title을 확인해보세요 !</Text>
            </M.HookContainer>
        </>
    );
};

export default UseTitle; 

const Text = styled.div`
font-size: 2.6rem;
`;
