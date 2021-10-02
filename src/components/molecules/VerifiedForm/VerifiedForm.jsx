/** 
 * @author : chaeeun 
 * @Date : 2021-03-08 15:18:31 
 * @Last Modified by: eun.🍒
 * @Last Modified time: 2021-10-03 06:06:30
 */

import React from "react"
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Button from '../../atoms/Button'
import TextBox from "../../atoms/TextBox"
import Typo from "../../atoms/Typography"
import { MdAlarmOn } from "react-icons/md"

const VerifiedForm = ({ minutes, seconds, email, editProfileFunction, isInputAuthNumForm,
    postAuthNumOnclick, authNum, editAuthNum, checkAuthNumOnclick }) => (
    <>
        {/* 이메일 입력 FORM */}
        <Row justify={"space-between"} style={{ height: "50px" }} >
            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
            </Col>

            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                <Row align={'initial'} justify={"space-between"}>
                    <Col offset={0.25} xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} justify={"start"} align={"center"} >
                        <Row align={"center"} >
                            <Col span={4}>
                                <TextBox color={"black"} border
                                    radius={'22px'} align={'center'} placeholder={'이메일을 입력해 주세요'}
                                    onChange={editProfileFunction.email} value={email} />
                            </Col>
                            <Col xs={0} sm={6} md={5} lg={5} xl={5} xxl={5} justify={"start"} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                <Typo color={'#707070'} size={'0.8rem'}>이메일을 입력해 주세요</Typo>
                            </Col>
                        </Row>
                    </Col>


                    <Col span={3} justify={"center"} align={"center"}>
                        {
                            (isInputAuthNumForm) ?
                                <Button types={'primary'} block value={'재발송'} onClick={postAuthNumOnclick}></Button>
                                :
                                <Button types={'primary'} block value={'인증번호발송'} onClick={postAuthNumOnclick}></Button>
                        }
                    </Col>
                </Row>
            </Col>
        </Row >

        {/* NOTE 인증번호 입력 FORM */}
        {
            (isInputAuthNumForm) ?
                <Row justify={"space-between"} style={{ height: "50px" }} >
                    <Col span={2} justify={"center"} align={"center"} style={{
                        backgroundColor: "#f5f5f5", height: "inherit"
                    }}>
                    </Col>


                    <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                        <Row align={'initial'} justify={"space-between"}>
                            <Col offset={0.25} xs={6} sm={7} md={8} lg={8} xl={8} xxl={8} justify={"start"} align={"center"}>
                                <Row align={"center"} >
                                    <Col span={4}>
                                        <TextBox color={"black"} border
                                            radius={'22px'} align={'center'} placeholder={'인증번호를 입력해 주세요'}
                                            onChange={editAuthNum} value={authNum} />
                                    </Col>
                                    <Col offset={0.2} span={4} justify={"start"} align={"center"} >
                                        <MdAlarmOn color={'#707070'} size={'0.8rem'} />
                                        <Typo color={'#707070'} size={'0.8rem'}>
                                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={3} justify={"center"} align={"center"} >
                                <Button types={'primary'} block value={'인증번호확인'} onClick={checkAuthNumOnclick}></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row >
                :
                null
        }
    </>
)

export default VerifiedForm