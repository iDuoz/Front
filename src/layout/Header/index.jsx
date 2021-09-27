import React from "react"
import styled from "styled-components"
import HeaderContent from "../../containers/redux/components/Header"
const HeaderStyle = styled.header`
    width : 100%;
    display : flex;
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