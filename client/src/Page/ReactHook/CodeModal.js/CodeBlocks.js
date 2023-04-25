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
    
    
}
    

export default HooksCode;