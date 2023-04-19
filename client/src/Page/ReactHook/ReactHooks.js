import {useState} from 'react';
import * as R from "./CommonStyled";
import UseInput from './UseInput';
import UseTab from "./UseTab";

const ReactHooks = () => {
    const [content, setContent] = useState("useinput");

    const selectHook = {
        useinput : <UseInput />,
        useTab : <UseTab />
    }

    // const selectHook = [
    //     { useinput: <UseInput /> },
    //     { useTab: <UseTab /> }
    // ]

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
                            <R.MenuButton onClick={handleClickButton} name="useinput">useInput</R.MenuButton>
                            <R.MenuButton  onClick={handleClickButton} name="useTab">useTab</R.MenuButton>
                        </R.MenuContainer>
                        {content && <R.MainContainer>{selectHook[content]}</R.MainContainer>}
                    </R.ContentContainer>
                </R.Container>
            </R.Wrapper> 
        </>   
    );
};

export default ReactHooks;

                        // {selectHook.map(hook => {
                        //         return <R.MenuButton onClick={handleClickButton}>useinput</R.MenuButton>
                        //     })}

    // CSS 레퍼런스 : https://wsss.tistory.com/2045