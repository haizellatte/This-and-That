import { useEffect, useState } from 'react';
import styled from "styled-components";

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
        <div>
            <Text>Tab Title을 확인해보세요 !</Text>
        </div>
    );
};

export default UseTitle; 

const Text = styled.div`
font-size: 2.6rem;
`;