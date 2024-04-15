import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
`

export const LogoArea = styled.div`
    width: 100%;
    max-width:1024px;
    margin:auto;
    display:flex;
    justify-content: center;
    align-items:center;
    height: 60px;
`

export const NavBar = styled.div`
    width:100%;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 10px
`

export const MenuIcon = styled.div`
    height: 40px;
    width: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:0.05s ease;
    border-radius: 8px;
    &:hover{
        transform: scale(1.2);
    }
    a i{
        color:blue;
        font-size: 18pt;
    }
`