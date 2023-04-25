import React from 'react';
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const UseNetwork = () => {
        return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useNetwork} />
            </M.ModalContainer>
            <M.HookContainer>
                <div>
                    UseNetwork
                </div>
            </M.HookContainer>
        </>
    );
};

export default UseNetwork;