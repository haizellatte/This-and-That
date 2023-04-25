import {useState} from 'react';
import * as R from "./CommonStyled";
import UseInput from './UseHooks/1.UseInput';
import UseTab from "./UseHooks/2.UseTab";
import UseTitle from "./UseHooks/3.UseTitle";
import USeClick from "./UseHooks/4.UseClick";
import UseConfirm from "./UseHooks/5.UseConfirm";
import UsePreventLeave from "./UseHooks/6.UsePreventLeave";
import UseBeforeLeave from './UseHooks/7.UseBeforeLeave';
import UseFadeIn from "./UseHooks/8.UseFadeIn";
import UseFullscrean from './UseHooks/9.UseFullscreen';
import UseNetwork from './UseHooks/10.UseNetwork';
import UseNotification from './UseHooks/11.UseNotification';
import UseScroll from './UseHooks/12.UseScroll';
import UseAxios from "./UseHooks/13.UseAxios";

const ReactHooks = () => {
    const [content, setContent] = useState("useInput");

    const SelectHook = [
        {useInput : <UseInput />},
        {useTab: <UseTab />},
        {useTitle: <UseTitle />},
        {useClick: <USeClick />},
        {useConfirm: <UseConfirm />},
        { usePreventLeave: <UsePreventLeave /> },
        { useBeforeLeave : <UseBeforeLeave /> },
        { useFadeIn: <UseFadeIn /> },
        { useFullScreen : <UseFullscrean /> },
        { useNetwork : <UseNetwork /> },
        { useNotification : <UseNotification /> },
        { useScroll : <UseScroll /> },
        { useAxios : <UseAxios />}
    ]

    const HookName = []
    for (let el of SelectHook) {
        HookName.push(Object.keys(el).toString())
    }

    /**
     * 객체 키값 가져오기 : Object.keys[객체]
     * 객체 배열 값 가져오기 : Object.values[객체]
     */

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    }
        
    return (
        <>
            <R.Wrapper>
                <R.Container>
                    <R.HeadContainer>
                        <div>Nomad 실전 React Hooks 연습 공간</div>   
                    </R.HeadContainer>
                    <R.ContentContainer>
                        <div className='menuContainer'>
                            {SelectHook.map((hook, index) => {
                                const hookName = Object.keys(hook).toString();
                                return <R.MenuButton key={index} onClick={handleClickButton} name={hookName}>{HookName.indexOf(hookName)+1}. {hookName}</R.MenuButton>
                            })} 
                        </div>
                        {content && <div className='mainContainer'>{SelectHook[HookName.indexOf(content)][content]}</div>}
                    </R.ContentContainer>
                </R.Container>
            </R.Wrapper> 
        </>   
    );
};

export default ReactHooks;

    // CSS 레퍼런스 : https://wsss.tistory.com/2045
