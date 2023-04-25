import React from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const UseAxios = () => {
        return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useAxios} />
            </M.ModalContainer>
            <M.HookContainer>
                <div>
                    UseAxios
                </div>
            </M.HookContainer>
        </>
    );
};

export default UseAxios;