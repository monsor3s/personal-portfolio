import styled from "styled-components";

interface IHeadingStyled {
    scroll: number;
}

export const HeaderContainer = styled.header<IHeadingStyled>`
    position: fixed;
    width: 100%;
    height: auto;
    padding: 20px 50px;
    box-sizing: border-box;
    background-color: ${props => props.scroll > 0 ? '#fff' : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${props => props.scroll > 0 ? '0 0 30px rgba(0,0,0,.1);' : 'none'};
    z-index: 1;
    transition: background-color .3s ease;
`

export const TitleHeader = styled.h1`
    font-size: 28px;
        font-weight: 900;
`

export const Menu = styled.div`
    width: auto;
`
export const List = styled.ul`
    width: 390px;
    display: flex;
    justify-content: space-between;
`

export const ItemList = styled.li`
    list-style: none;
    font-size: 16px;
    font-weight: 500;
    color: #000;

    a {
        text-decoration: none;
    }
`