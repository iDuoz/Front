import React from "react"
import styled from "styled-components"
import HeaderContent from "../../containers/redux/components/Header/index"
const HeaderStyle = styled.div`
transition: position 0.5s ease;
    z-index:20;
    width : 100%;
  height : 7.5rem;
  background-color: ${props => props.home ? 'rgba(255,255,255,0.5)' : '#edeff2'} ;
  display : flex;
  position : ${props => (props.position) ? (props.position) : `fixed`};
  border-bottom: 1.5px solid #dfdfe5;
  align-items: center;
  top : 0;
  left : 0;
  right : 0;
`

const Header = ({ position, home }) => {
    return (
        <>
            <HeaderStyle position={position} home={home}>
                <HeaderContent></HeaderContent>
            </HeaderStyle>
        </>
    )
}

export default Header