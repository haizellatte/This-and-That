import React from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const UseFullscrean = () => {
    return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useFullscrean} />
            </M.ModalContainer>
            <M.HookContainer>
                <div>
                    useFullscrean
                </div>
            </M.HookContainer>
        </>
    );
};

export default UseFullscrean;