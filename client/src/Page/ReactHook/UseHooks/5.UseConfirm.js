import styled from "styled-components";
import * as M from "../CommonStyled";
import { Modal } from "../CodeModal/Modal"
import HooksCode from "../CodeModal/CodeBlocks";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (typeof onConfirm !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            try {
                onCancel();
            } catch (error) {
                return;
            }
        }
    }
    return confirmAction; 
}

const UseConfirm = () => {
    const deletePlaylist = () => alert("Delete the playList 😇");
    const cancel = () => console.log("cancel");
    const confirmDelete = useConfirm("Are you sure delete your Playlist?", deletePlaylist, cancel);

    return (
        <>
            <M.ModalContainer>
                <Modal
                hookName={HooksCode.useConfirm} />
            </M.ModalContainer>
            <M.HookContainer>
                <Button onClick={confirmDelete}>Delete Playlist</Button>
            </M.HookContainer>
        </>

    );
};

export default UseConfirm;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 28rem;
    height : 5rem;
    font-size: 1.5rem;
	background-color:  #24221b;
    cursor: pointer;
    color: #e4dcc9;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 5px;
    border: 3px solid #24221b;

    :hover {
	background-color: #e4dcc9;
	color: #24221b;
}`;
