#🔮 This-and-That
이것저것 공부하는 레포지토리입니다.

<hr />

## ⚙️ 프로젝트 초기세팅(Install)
- `npx create-react-app {폴더명}`
- `npm i styled-components`
- 브라우저의 기본 스타일 초기화해주는 패키지 `npm i styled-reset`
- `npm i react-router-dom`
- `npm i react-icons`

<hr />

## 🎨 styled-components 초기 세팅
### src/Styles/GlobalStyles.js
```jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
${reset}

* {
	box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Mono', monospace;
}
    
body {
    font-family: 'IBM Plex Mono', monospace;
    background-color: #fcfbf4;
}

ol, ul, li {
	list-style: none;
}

a{
	text-decoration: none;
	color: inherit;

	&:hover {
    text-decoration: none;
	color: none;
	}
    
	&:active {
    text-decoration: none;
	color: black;
    background: none;
	}
        
    &:visited {
    text-decoration: none;
	color: black;
	}
        
	&:link {
    text-decoration: none;
	color: black; 
	}
}
`;

export default GlobalStyles;
```

<hr />

### src/Styles/theme.js
```jsx
// 16px(웹 브라우저 루트 요소의 기본 폰트 사이즈) === 1rem;
const calRem = (size) => `${size / 16}rem`;

const fontSize = {
    xs: calRem(12), // 0.75rem
    sm: calRem(14), // 0.875rem
    md: calRem(16), // 1rem
    lg: calRem(18), // 1.125rem
    xl: calRem(20), // 1.25rem
    subTitle: calRem(24), // 1.5rem;
    title: calRem(40), // 2.25rem;
};

const fontWeight = {
    thin: 'font-weight: 200',
    light: 'font-weight: 300',
    regular: 'font-weight: 400',
    bold: 'font-weight: 500',
    semiBold: 'font-weight: 600',
    extraBold: 'font-weight: 700',
};

const length = {
    xs: '0.5rem',
    sm: '1.0rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '3.5rem',
};

const border = {
    basic: 'border: 3px solid #24221b;'
};

const flex = {
    // flexBox의 기본값으로 direction = 'row' , align = 'center', justify = 'center' 설정되어 있다.
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
    `,
};

const color = {
    backgrLightColor: `#e4dcc9`,
    backgrDarkColor: `#24221b`,
    subText: '#bababc',
    black: '#17202A',
    white: '#FDFEFE',
    blue: '#3498DB',
    transparentBrandColor: 'rgba(92, 198, 186, 0.1)',
    transparentBackground: 'rgba(0, 0, 0, 0.1)',
};

// 각각의 객체들을 theme이라는 하나의 객체로 묶어서 export한다.
const theme = {
    fontSize,
    fontWeight,
    length,
    color,
    border,
    flex,
};

export default theme;
```

<hr />

### index.js
```jsx
...
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import theme from "../src/Styles/theme"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </>
);
```

<hr />

## 🎨 theme 사용방법
- flexbox/border/fontWeight
```jsx
${({theme}) => theme.flex.flexBox('column','', 'space-evenly')};
${({ theme }) => theme.border.basic};
${({ theme }) => theme.fontWeight.semiBold};
```
- fontSize/length/color
```jsx
font-size : ${({theme}) => theme.fontSize.title};
margin-bottom : ${({theme}) => theme.length.sm};
color : ${({theme}) => theme.color.backgrLightColor};
```

