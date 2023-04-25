import React from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const UseScroll = () => {
        return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useScroll} />
            </M.ModalContainer>
            <M.HookContainer>
                <div>
                    UseScroll
                </div>
            </M.HookContainer>
        </>
    );
};

export default UseScroll;