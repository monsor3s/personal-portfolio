import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    height: auto;
    padding: 25px 50px;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    transition: all .3s ease;

    h1 {
        font-size: 30px;
        font-weight: 900;
    }
`

export const Menu = styled.div`
    width: auto;

    ul {
        width: 390px;
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }
`