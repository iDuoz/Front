import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"


const HamburgerMenu = styled.div`
position: absolute;
/* top: 0;
left: 0; */
padding-left: 20px;
padding-top : 10px;
z-index: 2;
`

const HamburgerBtn = styled.div`

position: relative;
width: 25px;
height: 30px;
border: none;
background: none;
padding: 0;
cursor: pointer;

`

const HamburgerSpan = styled.span`
position: absolute;
height: 3px;
background: #000;
width: 100%;
left: 0px;
top: 0px;
transition: 0.1s ease-in;
${props => props.open ? `
transform: rotate(45deg);
top: 10px;
`: null}
`
const HamburgerSpanTwo = styled(HamburgerSpan)`
  top: 9px;
  ${props => props.open ? `
  width: 0%;
  opacity: 0;
`: null}
`
const HamburgerSpanThree = styled(HamburgerSpan)`
  top: 18px;
  ${props => props.open ? `
  transform: rotate(-45deg);
  top: 10px;
`: null}

`
const NavWrapper = styled.nav`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  background: #6d5dfc;
  color: #0e0620;
  width: 300px;
  z-index: 1;
  padding-top: 80px;
  transform: translateX(-100%);
  transition: 0.24s cubic-bezier(0.52, 0.01, 0.8, 1);

  ${props => props.open ? `
    transform: translateX(0%);
`: null}
`


const NavLi = styled.li`
  transform: translateX(-5px);
  transition: 0.16s cubic-bezier(0.44, 0.09, 0.46, 0.84);
  opacity: 0;
`

const NavLiOne = styled(NavLi)`
  ${props => props.open ? `
  transition-delay: 0.16s;
  transform: translateX(0px);
  opacity: 1;
`: null}
`

const NavLiTwo = styled(NavLi)`
  ${props => props.open ? `
    transition-delay: 0.32s;
  transform: translateX(0px);
  opacity: 1;
`: null}
`

const NavLiThree = styled(NavLi)`
  ${props => props.open ? `
  transition-delay: 0.48s;
  transform: translateX(0px);
  opacity: 1;
`: null}
`
const NavLiFour = styled(NavLi)`
  ${props => props.open ? `
  transition-delay: 0.64s;
  transform: translateX(0px);
  opacity: 1;
`: null}
`


const NavA = styled.div`
padding : 5px 0;
  display: block;
  font-size: 2em;
cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  transition: 0.24s ease-in-out;
  &:hover{
    text-decoration: none;
  color: #fff;
    }
`

const SideNav = () => {
  const history = useHistory();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)



  const burgerOnclick = (e) => {
    console.log(e);
    isHamburgerOpen ? setIsHamburgerOpen(false) : setIsHamburgerOpen(true)
  }
  return (
    <>
      <HamburgerMenu>
        <HamburgerBtn onClick={burgerOnclick}>
          <HamburgerSpan open={isHamburgerOpen}></HamburgerSpan>
          <HamburgerSpanTwo open={isHamburgerOpen}></HamburgerSpanTwo>
          <HamburgerSpanThree open={isHamburgerOpen}></HamburgerSpanThree>
        </HamburgerBtn>
      </HamburgerMenu>
      <NavWrapper open={isHamburgerOpen}>
        <ul style={{
          listStyleType: 'none',
          paddingInlineStart: '35px'
        }}>
          <NavLiOne open={isHamburgerOpen}>
            <NavA onClick={() => { history.push('/notice') }}>전체 게시글</NavA>
          </NavLiOne>
          <NavLiTwo open={isHamburgerOpen}>
            <NavA onClick={() => { history.push('/createnotice') }}>게시글 작성</NavA>
          </NavLiTwo>
          <NavLiThree open={isHamburgerOpen}>
            <NavA onClick={() => { history.push('/profile') }}>Profile</NavA>
          </NavLiThree>
          <NavLiFour open={isHamburgerOpen}>
            <NavA onClick={() => { history.push('/proposal') }}>추천 봉사</NavA>
          </NavLiFour>
        </ul>
      </NavWrapper>

    </>
  )
}


export default SideNav;