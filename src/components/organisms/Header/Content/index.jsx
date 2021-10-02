import React from 'react';
import styled from 'styled-components'
import Row from "../../../../layout/Grid/Row/index"
import Col from "../../../../layout/Grid/Column/index"
import Button from "../../../atoms/Button"
import Logo from "../../../atoms/Logo"
import Modal from "../../../atoms/Modal"
import { useHistory } from "react-router-dom"
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
const Header = ({
    logined,
    menuWrapperRef,
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
    LogintoSignUp,
    SignUPtoLogin,
    logInInfo,
    signUpInfo,
    logOutHandler
}) => {
    const history = useHistory();
    // TODO 로그인후 조건별로 설정
    console.log(logined)
    return (
        <>
            {/* SECTION Content */}

            <Row>
                <Col span={12} >
                    <Col xs={0} span={5} colRef={menuWrapperRef} align={'center'} justify={'flex-start'} style={{ position: "relative", padding: "10px 0" }} >
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
                    <Col xs={6} span={2} justify={'center'} align={'center'} >
                        <Logo width={'6.5rem'} height={'2.2rem'}></Logo>
                    </Col>
                    <Col xs={6} span={5} justify={'center'} align={'center'} >
                        {
                            (logined === true) ?
                                (<Button value={'LogOut'} onClick={logOutHandler} ></Button>)
                                : (<Button value={'Login'} onClick={handleLoginModal.show} ></Button>)

                        }
                    </Col>
                </Col>
            </Row>

            <Modal headerClose visible={isHeaderLoginModal.visible} closable={false} maskClosable={true}
                onClose={handleLoginModal.close} size={8} xs={8} sm={8} md={7} lg={7} xl={7} xxl={6}>
                <LoginModalForm isHeaderLoginModal={isHeaderLoginModal}
                    handleLoginModal={handleLoginModal}
                    settingSingUpValueFunction={settingSingUpValueFunction}
                    settingLogInValueFunction={settingLogInValueFunction}
                    LoginBtnOnclick={LoginBtnOnclick}
                    SignupBtnOnclick={SignupBtnOnclick}
                    LogintoSignUp={LogintoSignUp}
                    SignUPtoLogin={SignUPtoLogin}
                    logInInfo={logInInfo}
                    signUpInfo={signUpInfo}
                />
            </Modal>

            {/* !SECTION Content */}
        </>
    )
}


export default Header;