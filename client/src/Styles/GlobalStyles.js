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