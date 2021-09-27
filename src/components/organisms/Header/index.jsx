import React, { useRef, useState, useEffect, createRef } from 'react';
import styled from 'styled-components'
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import Img from "../../atoms/Image"
import { useHistory } from "react-router-dom"
import blackIcon from "../../../assets/images/meritsblack.png"
import whiteIcon from "../../../assets/images/meritswhite.png"
import gsap from "gsap"


const HeaderStyle = styled.div`
    z-index:20;
    width : 100%;
  min-height : 5rem;
  background-color: #edeff2;
  display : flex;
  position : absolute;
  border-bottom: 1px solid #dfdfe5;
  align-items: center;
`
const MenuItem = styled.div`
 padding: 16px 21px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
    transition: color .3s ease-out;
    margin: 5px 15px;
    ${props => (props.active) ? ` color : white` : null};
    @media(max-width: 576px){ padding : 10px 16px; }
`
const Indicator = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 30px;
    display: flex;
 justify-content: center;
 align-items: center;

`
/**
 * @param {HeaderItemName} header에들어가는pathName 
 * @Detail 최대 5개  
 */
const Header = ({ logined }) => {
    const history = useHistory();
    // TODO 로그인후 조건별로 설정
    const headerItemsName = ['FreeLance', 'Design', 'Director', 'Experience']



    const matchingHeaderPath = (itemName) => {
        const itemRoute = {
            FreeLance: '/',
            Design: '/',
            Director: '/',
            Experience: '/',
        };
        return itemRoute[itemName] || "/notFound"
    }

    const matchingHeaderColor = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",]


    const setHeaderItem = headerItemsName.map((items, index, source) => {
        return {
            name: items,
            color: matchingHeaderColor[index],
            path: matchingHeaderPath(items)
        }
    })


    console.log(setHeaderItem)



    const [active, setActive] = useState({ index: 0 });
    const menuWrapperRef = React.createRef();
    const headerItems = useRef(setHeaderItem.map(createRef))
    const indicator1 = useRef();
    const indicator2 = useRef();

    useEffect(() => {
        const menuOffset = menuWrapperRef.current.getBoundingClientRect();
        const activeItem = headerItems.current[active.index].current;
        const { width, height, top, left } = activeItem.getBoundingClientRect()
        // setResizeIndicator((state) => ({ ...state, width: width, height: height }))
        const settings = {
            x: left - menuOffset.x,
            y: top - menuOffset.y,
            width: width,
            height: height,
            backgroundColor: setHeaderItem[active.index].color,
            ease: 'elastic.out(.7, .7)',
            duration: .8
        }
        gsap.to(indicator1.current, {
            ...settings,
        })

        gsap.to(indicator2.current, {
            ...settings,
            duration: 1
        })
    }, [active.index, menuWrapperRef, setHeaderItem])

    const handleActiveIndex = (index) => {
        setActive((state) => ({ ...state, index: index }))
    }

    return (
        <>
            {/* SECTION Content */}

            <HeaderStyle>
                <Row>
                    <Col span={12} >
                        <Col xs={12} sm={12} span={5} colRef={menuWrapperRef} align={'center'} justify={'flex-start'} style={{ position: "relative", padding: "10px 0" }} >
                            {
                                setHeaderItem.map((items, index) => (
                                    <MenuItem
                                        key={index}
                                        ref={headerItems.current[index]}
                                        onMouseEnter={() => { handleActiveIndex(index) }}
                                        onMouseLeave={((e) => { e.stopPropagation() })}
                                        onClick={() => { history.push(items.path) }}
                                        active={active.index === index ? true : false}
                                    >{items.name}</MenuItem>
                                ))
                            }
                            <Indicator ref={indicator1}></Indicator>
                            <Indicator ref={indicator2}></Indicator>
                        </Col>
                        <Col xs={0} sm={0} span={2} justify={'center'} align={'center'}>

                            <Img src={whiteIcon} width={'6.5rem'} height={'2.2rem'}></Img>
                        </Col>
                        <Col xs={0} sm={0} span={5} >

                        </Col>
                    </Col>
                </Row>
            </HeaderStyle>


            {/* !SECTION Content */}
        </>
    )
}


export default Header;