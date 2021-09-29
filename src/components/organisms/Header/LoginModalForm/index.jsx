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
const LoginModalForm = ({ isHeaderLoginModal,
    handleLoginModal,
    settingSingUpValueFunction,
    settingLogInValueFunction,
    LoginBtnOnclick,
    SignupBtnOnclick, }) => {



    return (
        <>
            <Row>
                <Col span={12} style={{ padding: '2rem 0rem' }}>
                    <Row justify={'space-evenly'} align={"center"}>
                        <Col span={6}>
                            {/* SECTION login */}
                            {
                                (isHeaderLoginModal.type === 'login') ?
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
                                            <TextBox size={'small'} placeholder={"email"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox type={"password"} size={'small'} placeholder={"password"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marinTop: '15px' }}  >
                                            <Button value={'SIGN IN'} types={'primary'} size={'large'} />
                                        </Col>
                                    </Row>
                                    : null
                            }
                            {/* !!SECTION login */}
                            {/* SECTION SignUp */}
                            {
                                (isHeaderLoginModal.type === 'SignUp') ?
                                    <Row gutter={[5, 0]} align={'center'} justify={'center'}>
                                        <Col span={12} justify={'center'}>
                                            <Typo size={'2rem'} weight={'700'} color={'#181818'}>SignUp MeritShare</Typo>
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
                                            <TextBox size={'small'} placeholder={"email"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'}  >
                                            <TextBox type={"password"} size={'small'} placeholder={"password"} block></TextBox>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ marinTop: '15px' }}  >
                                            <Button value={'SIGN IN'} types={'primary'} size={'large'} />
                                        </Col>
                                    </Row>
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
                        </Col>

                        <Col span={4} align={'center'} justify={'center'} >
                            {/* SECTION login */}
                            {
                                (isHeaderLoginModal.type === 'login') ?
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
                                            <Button value={'SIGN UP'} types={'secondary'} block size={'large'}
                                            ></Button>
                                        </Col>
                                    </Row>
                                    : null
                            }
                            {/* !!SECTION login */}
                            {/* SECTION SignUp */}
                            {
                                (isHeaderLoginModal.type === 'SignUp') ?
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
                                            <Button value={'SIGN IN'} types={'secondary'} block size={'large'}
                                            ></Button>
                                        </Col>

                                    </Row>
                                    : null
                            }
                            {/* !!SECTION SignUp */}


                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    )

}


export default LoginModalForm