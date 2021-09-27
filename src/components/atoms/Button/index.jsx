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
  transition: 0.3s ease;



    ${props => {
        switch (props.size) {
            case "small":
                return `
                    padding : 2px 8px;
                `
            case "large":
                return `
                    padding : 12px 20px;
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
  background: var(--primary);
  box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-light), inset -0.2rem -0.2rem 1rem var(--primary-dark), 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  color: var(--greyLight-1);
            `
            case "text":
                return `
                background-color: rgba(255,255,255,0);
                border: none;
                outline : 0;
                color : #000000;
            `
            default:
                return `
                background-color: #FFFFFF;
                border: 1px solid #000000;
                border-radius : 3px;
                color : #000000;
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