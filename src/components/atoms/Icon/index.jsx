import React from "react"
import styled from "styled-components"


const Label = styled.div`
position: relative;
color: #9baacf;
font-size : ${props => props.size - 2 || `0.9rem`};
  padding-left : 10px;
  font-weight : ${props => props.weight || `600`} ;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
height: inherit;
display : flex;
align-items: center;

${props => (props.direction === 'column') ? `
  padding : 6px 0 0 0;
  font-size : 1.1rem;
`: null};

::before{
    transform: scaleX(0);
    transform-origin: bottom right;
    content: " ";
    display: block;
    position: absolute;
     right: 0;
      bottom: 0; 
      left: 0;
    /* inset: 0 0 0 0; */
    height : 35%;
    margin-Top : 5px;
    background-color: ${props => (props.highLightColor || `#6d5dfc3b`)} ;
    color: white ;
    transition: transform .3s ease;
};
  ${props => props.justIcon ? `cursor: default;` : null};
`



const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;

  height:${props => props.size || `4rem`};
  ${props => props.direction ? `
  flex-direction : ${props.direction};
  height : auto;
  ` : null}

  ${props => props.justIcon ? null : `
  &:hover ${Label}::before{
    transform: scaleX(1);
    transform-origin: bottom left;
  };` }
`

const IconBtn = styled.div`
width: ${props => props.size || `4rem`};
  height: ${props => props.size || `4rem`};
  font-size:  ${props => props.size - 1 || `3rem`};;
  border-radius: 50%;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #9baacf;
  transition: all 0.5s ease;
  ${props => props.justIcon ? `cursor: default;` : `
   &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
  color: #6d5dfc;
  }`
  };


  
`




/**
 * 
 * @param size 크기
 * @param value 아이콘 설명 
 * @param oNClick onclick
 * @param children ICON
 * @param direction 방향(icon,value)
 */
const IconButton = ({ direction, size, value, onClick, children, weight, justIcon }) => {
  return (
    <>
      <Wrapper direction={direction} onClick={onClick} size={size} justIcon={justIcon}>
        <IconBtn size={size} onClick={onClick} justIcon={justIcon}>
          {children}
        </IconBtn>
        {value ?
          <Label direction={direction} weight={weight} justIcon={justIcon}>
            {value}
          </Label>
          : null}
      </Wrapper>
    </>
  )
}

export default IconButton;