import React from "react"
import styled from "styled-components"
import HeaderContent from "../../containers/redux/components/Header"
const HeaderStyle = styled.div`
    width : 100%;
  
    top : 0;
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