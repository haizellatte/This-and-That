import styled from "styled-components";

export const Wrapper = styled.div`
${({theme}) => theme.flex.flexBox()};
height: 100%; 
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color : ${({theme}) => theme.color.backgrLightColor};
`;

export const Container = styled.div`
${({theme}) => theme.flex.flexBox('column')};
height: 90%; 
width: 90%;
`;

export const HeadContainer = styled.div`
${({ theme }) => theme.flex.flexBox()};
background-color : ${({theme}) => theme.color.backgrDarkColor};
border-radius: 20px;
width: 100%;
height: 10%; 
margin-bottom:  ${({ theme }) => theme.length.sm};
    > div {
        ${({ theme }) => theme.fontWeight.semiBold};
        font-size: 4rem;
        color : ${({theme}) => theme.color.backgrLightColor};
    }
`;

export const ContentContainer = styled.div`
${({ theme }) => theme.flex.flexBox()};
height: 100%;
width: 100%;
padding: ${({theme}) => theme.length.sm};

    .menuContainer {
        ${({theme}) => theme.flex.flexBox('column')};
        ${({ theme }) => theme.border.basic};
        padding: ${({ theme }) => theme.length.sm};
        margin-right : ${({ theme }) => theme.length.sm};
        border-radius: 20px;
        height: 100%;
    }
    .mainContainer {
        ${({ theme }) => theme.flex.flexBox('column')};
        ${({ theme }) => theme.border.basic};
        border-radius: 20px;
        width: 100%;
        height: 100%;
    }
`;

export const MenuButton = styled.button`
    width : 21rem;
    height : 5.3rem;
    font-size: 1.6rem;
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
${({theme}) => theme.flex.flexBox('', '','flex-end')};
width: 100%;
padding: 1rem 3rem;
`;

export const HookContainer = styled.div`
${({theme}) => theme.flex.flexBox('column')};
padding : 5rem 2rem;
height: 90%;
width: 100%;
`;

export const Text = styled.div`
font-size: ${(props) => props.fontSize || "2.6rem"};
cursor: pointer;
margin-bottom: 2rem;
`; 