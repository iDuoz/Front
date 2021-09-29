import React from "react"
import styled from "styled-components"

const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
 /* width: 15rem;
  height: 4rem; */
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* transition: 0.3s ease; */
 

    ${props => {
        switch (props.size) {
            case "small":
                return `
                    padding : 12px 23px;
                `
            case "large":
                return `
                    padding : 10px 50px;
                `
            default:
                return `
                padding : 8px 16px;
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
                color: #9baacf;
                border : none;
                &:hover{
                    color: #6d5dfc;
                    }
                &:active {
                    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
                }
            `
            default:
                return `
                background-color: #FFFFFF;
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
    ${props => (props.block) ? `width : 100%;` : null}
    font-size: 1rem;
    cursor: pointer;
    ${props => props.bold ? `font-weight : bold` : null}
`

const Button = ({ href, size, types, block, value, onClick, bold }) => (
    <>
        <ButtonComponent href={href} size={size} types={types} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)


export default Button