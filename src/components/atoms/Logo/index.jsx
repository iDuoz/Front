import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import logo from "../../../assets/images/meritswhite.png";

const LogoStyle = styled.div`
  width : auto;
  height: inherit;
  cursor: pointer;
`

const Index = ({ width, height }) => {
    const history = useHistory();
    return (
        <>
            <LogoStyle onClick={() => history.push("/")}>
                <img src={logo} alt="" style={{
                    height: `${height}`,
                    width: `${width}`
                }} />
            </LogoStyle>
        </>
    )
}

export default Index
