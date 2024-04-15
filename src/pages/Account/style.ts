import styled from "styled-components";

export const Container = styled.div`
    width:100vw;
    height: 100vh;
    border:none;
    margin:none;
    padding:none;
    padding:200px 20px 0 20px;
    display: flex;
    justify-content: center;
    vertical-align: flex-start;
`

export const LoginBox = styled.div`
    box-sizing: border-box;
    max-width: 440px;
    min-width: 349px;
    height: 500px;
    border-radius: 8px;
    /* background-color:  rgba(255, 255, 255, 0.2); */
    /* border: 1px solid rgba( 168, 168, 168, 0.5); */
    /* backdrop-filter: blur(20px); */
    padding: 40px 20px;
    display:flex;
    flex-direction: column;
    gap: 20px;
`



export const Button = styled.button`
    width: '100%';
    background-color: blue;
    color: white;
    font-size:12pt;
    font-weight: 700;
    padding: 10px;
    border:none;
    border-radius: 8px;
    transition: 0.2s ease;
    &:hover{
        background-color: darkblue;
    }
`
