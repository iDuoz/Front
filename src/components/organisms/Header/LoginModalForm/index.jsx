import React from "react";
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography/index"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
import Icon from "../../../atoms/Icon"
import TextBox from "../../../atoms/TextBox"
import { FcGoogle } from "react-icons/fc";
import LoadingIcon from '../../../atoms/LoadingIcon'
const LoginModalForm = ({
    isHeaderLoginModal,
    handleLoginModal,
    settingSingUpValueFunction,
    settingLogInValueFunction,
    LoginBtnOnclick,
    SignupBtnOnclick,
    LogintoSignUp,
    SignUPtoLogin,
    logInInfo,
    signUpInfo
}) => {



    return (
        <>
            <Row>
                <Col span={12} style={{ padding: '2rem 0rem' }}>
                    <Row justify={'space-evenly'} align={"center"}>

                        {/* SECTION login */}
                        {
                            (isHeaderLoginModal.type === 'login') ?
                                <Col span={6}>
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'center'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>LogIn MeritShare</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Icon size={'2.5rem'} value={"google통해 로그인하기"}>
                                                <FcGoogle></FcGoogle>
                                            </Icon>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Typo size={'0.75rem'} color={'#bec8e4'}>
                                                or your email account
                                            </Typo>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox onChange={settingLogInValueFunction.email} value={logInInfo.email} size={'small'} placeholder={"email"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox onChange={settingLogInValueFunction.password} value={logInInfo.password} type={"password"} size={'small'} placeholder={"password"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marinTop: '15px' }}  >
                                            <Button onClick={LoginBtnOnclick} value={'SIGN IN'} types={'primary'} size={'large'} />
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION login */}
                        {/* SECTION SignUp */}
                        {
                            (isHeaderLoginModal.type === 'SignUp') ?
                                <Col span={4}>
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'center'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>Hello Friend!</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Typo size={'0.75rem'} color={'#bec8e4'}>
                                                이미 가입하셨나요?
                                            </Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Button onClick={SignUPtoLogin} value={'SIGN IN'} types={'secondary'} block size={'large'}
                                            ></Button>
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION SignUp */}
                        {/* SECTION Loading */}
                        {
                            (isHeaderLoginModal.type === 'Loading') ?
                                <Row align={'center'} justify={'center'}>
                                    <Col span={12}>
                                        <LoadingIcon></LoadingIcon>
                                    </Col>
                                </Row>
                                : null
                        }
                        {/* !!SECTION Loading */}



                        {/* SECTION login */}
                        {

                            (isHeaderLoginModal.type === 'login') ?
                                <Col span={4} align={'center'} justify={'center'} >
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'center'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>Welcome Back!</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Typo size={'0.75rem'} color={'#bec8e4'}>
                                                아직회원이 아니신가요?
                                            </Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Button onClick={LogintoSignUp} value={'SIGN UP'} types={'secondary'} block size={'large'}
                                            ></Button>
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION login */}
                        {/* SECTION SignUp */}
                        {
                            (isHeaderLoginModal.type === 'SignUp') ?
                                <Col span={6} align={'center'} justify={'center'} >
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'center'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>SignUp MeritShare</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Icon size={'2.5rem'} value={"google통해 회원가입하기"}>
                                                <FcGoogle></FcGoogle>
                                            </Icon>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marginTop: "0.7rem" }} >
                                            <Typo size={'0.75rem'} color={'#bec8e4'}>
                                                or your email account
                                            </Typo>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox value={signUpInfo.email} onChange={settingSingUpValueFunction.email} size={'small'} placeholder={"email"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox onChange={settingSingUpValueFunction.password} type={"password"} size={'small'} placeholder={"password"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marinTop: '15px' }}  >
                                            <Button value={signUpInfo.password} onClick={SignupBtnOnclick} value={'SIGN UP'} types={'primary'} size={'large'} />
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {/* !!SECTION SignUp */}


                    </Row>
                </Col>
            </Row >
        </>
    )

}


export default LoginModalForm