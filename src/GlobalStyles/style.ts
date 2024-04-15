import styled from "styled-components"

export const ChangeArea = styled.div`
   width:100%;
   height: 60px;
   background-color:rgba( 168, 168, 168, 0.2);
   border-radius: 5px;
   gap: 10px;
   position: relative;
   display:flex;
   align-items: end;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0 20px;
    color: black;
    position: absolute;
    top: 5px;
`

type ChangeAnimationProps = {
    altura: string
}
export const Label = styled.label<ChangeAnimationProps>(({altura})=>(
    `
        position: absolute;
        transition: 0.2s ease;
        left:20px;
        top:${altura};
    `
))