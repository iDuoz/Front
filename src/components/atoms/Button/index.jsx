import React from "react"
import styled from "styled-components"

const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
 /* width: 15rem;
  height: 4rem; */
  border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:  0.3s ease;
  font-size: ${props => props.fontSize || `1rem`};
    cursor: pointer;
    ${props => {
        switch (props.size) {
            case "small":
                return `
                    padding : 8px 16px;
                `
            case "large":
                return `
                    padding : 10px 50px;
                `
            default:
                return `
                padding :0.857em 1.643em;
                `
        }
    }}
${props => {
        switch (props.types) {
            case "primary":
                return `
                    background: #6d5dfc;
                    border : none;
                    box-shadow: inset 0.2rem 0.2rem 1rem #8abdff, inset -0.2rem -0.2rem 1rem #5b0eeb, 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
                    color:#E4EBF5;
                    &:hover{
                        color: #FFFFFF;
                    }
                    &:active {
                        box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
                    }
            `
            case "secondary":
                return `
                color: #6d5dfc;
                font-weight : 400;
                border : none;
                &:hover{
                    color: #470cb4;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
                }
            `
            default:
                return `
                background-color: rgba(255,255,255,0);
                border: 1px solid #697592;
                border-radius : 3px;
                box-shadow : none;
                color : #697592;
                &:hover{
                    color: #5b667e;
                    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.5rem #d3d7e6, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
                }
            `
        }
    }}
    
    
    ${props => props.bold ? `font-weight : bold` : null}
    ${props => props.plane ? `
    background-color: #4b70e2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    color:#E4EBF5;
                    &:hover{
                        color: #FFFFFF;
                    }
                    &:active {
                        box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
                    }
    `: null};
    ${props => (props.block) ? `width : 90%;` : null}
    ${props => (props.shadow) ? `box-shadow : ${props.shadow}` : null}
`

const Button = ({ href, size, types, fontSize, block, value, onClick, bold, plane, shadow, }) => (
    <>
        <ButtonComponent href={href} size={size} fontSize={fontSize} types={types} shadow={shadow}
            plane={plane} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)


export default Button