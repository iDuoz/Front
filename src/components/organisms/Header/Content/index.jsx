import React, { useRef, useState, useEffect, createRef } from 'react';
import styled from 'styled-components'
import Row from "../../../../layout/Grid/Row/index"
import Col from "../../../../layout/Grid/Column/index"
import Img from "../../../atoms/Image"
import Button from "../../../atoms/Button"
import Modal from "../../../atoms/Modal"
import { useHistory } from "react-router-dom"
import blackIcon from "../../../../assets/images/meritsblack.png"
import whiteIcon from "../../../../assets/images/meritswhite.png"
import LoginModalForm from "../LoginModalForm"


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
const Header = ({ logined, menuWrapperRef,
    setHeaderItem,
    headerItems,
    handleActiveIndex,
    active,
    indicator1,
    indicator2,
    //modal
    isHeaderLoginModal,
    handleLoginModal,
    settingSingUpValueFunction,
    settingLogInValueFunction,
    LoginBtnOnclick,
    SignupBtnOnclick,
}) => {
    const history = useHistory();
    // TODO 로그인후 조건별로 설정


    return (
        <>
            {/* SECTION Content */}

            <Row>
                <Col span={12} >
                    <Col xs={12} span={5} colRef={menuWrapperRef} align={'center'} justify={'flex-start'} style={{ position: "relative", padding: "10px 0" }} >
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
                    <Col xs={0} span={2} justify={'center'} align={'center'}>

                        <Img src={whiteIcon} width={'6.5rem'} height={'2.2rem'}></Img>
                    </Col>
                    <Col xs={0} span={5} justify={'space-around'} align={'center'} >
                        {/* <Button size={'small'} types={"secondary"} value={'Login'}></Button>
                        <Button size={'large'} types={"primary"} value={'Login'}></Button> */}
                        <Button value={'Login'} onClick={handleLoginModal.show} ></Button>
                    </Col>
                </Col>
            </Row>

            <Modal headerClose visible={isHeaderLoginModal.visible} closable={false} maskClosable={true}
                onClose={handleLoginModal.close} size={10} xs={10} sm={10} md={9} lg={9} xl={9} xxl={9}>
                <LoginModalForm isHeaderLoginModal={isHeaderLoginModal}
                    handleLoginModal={handleLoginModal}
                    settingSingUpValueFunction={settingSingUpValueFunction}
                    settingLogInValueFunction={settingLogInValueFunction}
                    LoginBtnOnclick={LoginBtnOnclick}
                    SignupBtnOnclick={SignupBtnOnclick} />
            </Modal>

            {/* !SECTION Content */}
        </>
    )
}


export default Header;