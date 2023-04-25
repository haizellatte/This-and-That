import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%; 
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color : #e4dcc9;
`;

export const Container = styled.div`
display: flex;
height: 90%; 
width: 90%;
align-items: center;
flex-direction: column;
`;

export const HeadContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #24221b;
border-radius: 20px;
width: 100%;
height: 10%; 
margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%; 
flex-direction: row;
`;

export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 3px solid #24221b;
border-radius: 20px;
margin-right : 1rem;
flex-direction: column;
height: 100%;
width: 20%;
`;

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 80%;
border: 3px solid #24221b;
border-radius: 20px;
`;


export const HeadText = styled.div`
font-weight: 600;
font-size: 4rem;
color: #e4dcc9;
`

export const MenuButton = styled.button`
    width : 15rem;
    height : 5.3rem;
    font-size: 1.8rem;
	background-color:  #24221b;
    cursor: pointer;
    color: #e4dcc9;
	border-radius: 50px;
    margin-bottom: 1rem;
    overflow-wrap : break-word;
    padding : 5px 10px;

    :hover {
	background-color: #e4dcc9;
	color: #24221b;
}

    @media (max-width: 320px) {
        width : 3rem;
        height : 5rem;
        font-size: 2rem;
}
`;

export const ModalContainer = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
padding: 1rem 4.5rem;
position: relative;
top : 0;
`;