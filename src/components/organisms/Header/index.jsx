import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import Img from "../../atoms/Image"
import { useHistory } from "react-router-dom"
import blackIcon from "../../../assets/images/meritsblack.png"
import whiteIcon from "../../../assets/images/meritswhite.png"

const HeaderStyle = styled.div`
    z-index:20;
    width : 100%;
  height : 5rem;
  background-color: #edeff2;
  display : flex;
  position : absolute;
  border-bottom: 1px solid #dfdfe5;
  align-items: center;
`
const MenuItem = styled.div`
 padding: 18px 23px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
    transition: color .3s ease-out;
    margin: 5px 0;
    ${props => (props.active) ? ` color : while` : null};
`


const Header = ({ logined }) => {
    const history = useHistory();
    const [active, setActive] = useState(0);
    const menuWrapperRef = React.createRef();

    // console.log(menuWrapperRef.current)

    return (
        <>
            {/* SECTION Content */}

            <HeaderStyle>
                <Row>
                    <Col span={12} >
                        <Col span={5} colRef={menuWrapperRef} >
                            <MenuItem >Freelance</MenuItem>
                            <MenuItem >Design</MenuItem>
                            <MenuItem >Director</MenuItem>
                            <MenuItem >Experience</MenuItem>
                        </Col>
                        <Col span={2} justify={'center'} align={'center'}>
                            <Img src={whiteIcon} width={'6.5rem'} height={'2.2rem'}   ></Img>
                        </Col>
                        <Col span={5} >

                        </Col>
                    </Col>
                </Row>
            </HeaderStyle>


            {/* !SECTION Content */}
        </>
    )
}


export default Header;