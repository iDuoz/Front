import React from "react"
import styled from "styled-components"
import HeaderContent from "../../containers/header/ContentContainer"
const HeaderStyle = styled.div`
    z-index:20;
    width : 100%;
  min-height : 5rem;
  background-color: #edeff2;
  display : flex;
  position : fixed;
  border-bottom: 1.5px solid #dfdfe5;
  align-items: center;
  top : 0;
  left : 0;
  right : 0;
`

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <HeaderContent></HeaderContent>
            </HeaderStyle>
        </>
    )
}

export default Header