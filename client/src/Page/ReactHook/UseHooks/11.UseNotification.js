import React from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const UseNotification = () => {
        return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useNotification} />
            </M.ModalContainer>
            <M.HookContainer>
                <div>
                    UseNotification
                </div>
            </M.HookContainer>
        </>
    );
};

export default UseNotification;