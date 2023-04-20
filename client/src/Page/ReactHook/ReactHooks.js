import {useState} from 'react';
import * as R from "./CommonStyled";
import UseInput from './UseInput';
import UseTab from "./UseTab";
import UseTitle from "./UseTitle";
import USeClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UsePreventLeave from "./UsePreventLeave";

const ReactHooks = () => {
    const [content, setContent] = useState("useInput");

    const selectHook = {
        useInput : <UseInput />,
        useTab: <UseTab />,
        useTitle: <UseTitle />,
        useClick: <USeClick />,
        useConfirm: <UseConfirm />,
        usePreventLeave : <UsePreventLeave />
    }

    // console.log((Object.keys(selectHook))[0]) //useInput

    /**
     * 객체 키값 가져오기 : Object.keys[객체]
     * 객체 배열 값 가져오기 : Object.values[객체]
     */

    const SelectHook = [
        {useInput : <UseInput />},
        {useTab: <UseTab />},
        {useTitle: <UseTitle />},
        {useClick: <USeClick />},
        {useConfirm: <UseConfirm />},
        {usePreventLeave : <UsePreventLeave />},
    ]

    const HookName = []
    for (let el of SelectHook) {
        // HookName.push(Object.keys(el));   
        HookName.push(Object.keys(el).toString())
    }
    console.log(HookName)
    // console.log((Object.keys(HookName)))
    // console.log(Object.values(SelectHook.useInput)) //useInput

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    }
        
    return (
        <>
            <R.Wrapper>
                <R.Container>
                    <R.HeadContainer>
                        <R.HeadText>Nomad 실전 React Hooks 연습 공간</R.HeadText>   
                    </R.HeadContainer>
                    <R.ContentContainer>
                        <R.MenuContainer>
                            {/* {selectHook.map((hook, index) => {
                                return <R.MenuButton key={index} onClick={handleClickButton} name={hook}>{hook}</R.MenuButton>
                            })} */}
                            {SelectHook.map((hook, index) => {
                                const hookName = Object.keys(hook).toString();
                                return <R.MenuButton key={index} onClick={handleClickButton} name={hookName}>{hookName}</R.MenuButton>
                            })} 
                        </R.MenuContainer>
                        {content && <R.MainContainer>{selectHook[content]}</R.MainContainer>}
                    </R.ContentContainer>
                </R.Container>
            </R.Wrapper> 
        </>   
    );
};

export default ReactHooks;

    // CSS 레퍼런스 : https://wsss.tistory.com/2045
