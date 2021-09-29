import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  height:${props => props.size || `4rem`};
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
  color: #9baacf;;
  transition: all 0.5s ease;
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
  color: #6d5dfc;
  };

  &:hover{
    color: #6d5dfc;
  }
`

const Label = styled.div`
color: #9baacf;
font-size : ${props => props.size - 2 || `0.9rem`};
  padding-left : 10px;
  font-weight : 600;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
height: inherit;
display : flex;
align-items: center;

`



/**
 * 
 * @param size 크기
 * @param value 아이콘 설명 
 * @param oNClick onclick
 * @param children ICON
 * 
 */
const IconButton = ({ size, value, onClick, children }) => {
  return (
    <>
      <Wrapper onClick={onClick} size={size}>
        <IconBtn size={size} onClick={onClick}>
          {children}
        </IconBtn>
        {value ?
          <Label>
            {value}
          </Label>
          : null}
      </Wrapper>
    </>
  )
}

export default IconButton;