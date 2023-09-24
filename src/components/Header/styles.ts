import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    padding: 25px 50px;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;

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