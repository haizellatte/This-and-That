const HooksCode = {
    useInput : `const useInput = (initialValue, validator) => { //여기서 validator는 함수이다.
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        //2. Input의 유효성을 검증할 수 있다.
        let valid = true;
        if (typeof validator === "function") {
            valid = validator(value);  // 이때 validator(value)는 Boolean 값이다.
        }
        //valid가 유효하다면 input의 value값을 바꿔준다. 즉 validator(value)가 false라면 작성되지 않는다.
        if (valid) {
            setValue(e.target.value);
        }
    };
    return {value, onChange}
};`,
    useTab : `const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    //playList가 없거나 배열이 아니라면 이무것도 리턴하지 않고, 그냥 빠져나간다.
    if (!allTabs || !Array.isArray(allTabs)) {
        return; 
    } 
    return {
        currentItem: allTabs[currentIndex],
        // changeItem : useTabs(0, playList) <-- index값인 첫번째 인자값을 바꿔주는 함수
        changeItem : setCurrentIndex
    }
}`,
    useTitle : `const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    return setTitle;
    };`,
    useClick : `const useClick = onClick => {

    const element = useRef();

    useEffect(() => {
        //1. 해당 ref에 클릭 이벤트를 추가하고
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            //2. 리턴 시 해당 클릭 이벤트를 ref에서 지운다.
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
    }, [])
    return element;
}`,
    useConfirm: `const useConfirm = (message = "", onConfirm, onCancel) => {
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
}`,
    usePreventLeave : `const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        //beforeunload는 returnValue를 반드시 요구한다.
        event.returnValue = "";
    }
    //beforeunload는 window가 닫히기 전에 해당 function이 실행되는걸 허락한다. 
    const protect = () => window.addEventListener("beforeunload", listener);
    const unprotect = () => window.removeEventListener("beforeunload", listener);

    return { protect, unprotect };
}`,
    useBeforeLeave: `
    const useBeforeLeave = onBefore => {

    const handle = (event) => {
        //clientY : 사용자의 마우스가 위치한 세로축. Y < 0 이라면 사용자의 마우스가 브라우저를 벗어나 위쪽(탭)을 향해 있다는 말이다.
        const { clientY } = event;
        // 사용자의 마우스가 위쪽을 향할 때만 
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        return () => document.removeEventListener("mouseleave", handle);
    }, []) //한번만 반복하겠금

    if (typeof onBefore !== "function") {
        return;
    };
}
    `,
    useFadeIn: `/**
 *  css의 animation을 Hook으로 만들어보자.
 * ! React18에서는 'npm run dev'모드에서는 transtion(fade in)이 정상적으로 작동되지 않은 이슈가 있다. 
 * ! 따라서 최초 렌더링 후, 리렌더링이 되지 않으니 아래 방법을 통해 fade in 여부를 확인하면 된다.
 * 1. current.style.opacity = 1 부분 주석 처리 후 새로고침
 * 2. 주석 처리 해제
 */ 

//duration(지속 시간) : 기본 1초 / delay(지연 시간) : 기본 0초
const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            //아래 구문 템플릿 리터럴로 작성 (템플릿 리터럴 중첩 문제로 문자열로 표기함.)
            current.style.transition = opacity durations ease-in-out delays";
            current.style.opacity = 1; //! Here !
        }
    }, [])
    return {ref : element, style : {opacity : 0}}
}`,
    useFullscrean: ``,
    useNetwork: ``,
    useNotification: ``,
    useScroll: ``,
    useAxios : ``
}
    

export default HooksCode;