import styled from "styled-components";

export const MonitContainer = styled.div`
    width: 100%;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 8px;
    height: 180px;
    margin-top: 20px;
    display:flex;
    justify-content: space-between;

`

export const MonitInfo = styled.div`
    min-width:130px;
    min-width:130px;
    overflow: hidden;
`

export const Info = styled.p`
    font-size: 11pt;
    font-family: Arial, Helvetica, sans-serif;
    text-justify: auto;
    display:flex;
    gap: 5px;
`
export const MonitConnectionResult = styled.div`
    min-width:140px;
    display:flex;
    justify-content:center;
    align-items:center  ;
`

export const PingCircleIndicator = styled.div`
    width: 120px;
    height:120px;
    border: 1px solid orange;
    border-radius: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
`
export const PingTitleContainer  = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 5px;
`
export const PingTitle = styled.p`
    font-size: 14pt;
`

export const Ping = styled.p`
    font-size: 18pt;
    font-weight: 600;
`

export const UnidadeTempo = styled.p`
    font-size: 12pt;
    font-weight: 600
`