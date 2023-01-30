import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'

import Typo from "../../../atoms/Typography"
import Image from "../../../atoms/Image"

import styled from 'styled-components'
import { Divider, Button } from "antd"

import upperTool from '../../../../assets/icons/LilltUpperTool.png'
import lowerTool from '../../../../assets/icons/LilltlowerTool.png'
import wristTool from '../../../../assets/icons/LilltWristTool.png'
import { useNavigate } from "react-router-dom"

const ToolWrapper = styled.div`
    width : auto;
    height : 20rem;
    border : 2px solid #eaeaea;
    border-radius:3px;
    box-sizing: border-box;
    background-color: #ffffff8c;
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
`






const Oneself = () => {
    const navigate = useNavigate();

    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"}>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>운동 선택</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 재활 필요 부위를 선택합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ marginTop: "3rem" }}>
                        <Row justify={"space-between"} >
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>상체</Divider>
                                    </Col>
                                    <Col span={12} align={"center"} >
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={upperTool} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block type="primary" onClick={() => navigate('/selecttool/upper')}  >재활기기선택</Button>
                                    </Col>
                                </Row>


                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>하체</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={lowerTool} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block type="primary" onClick={() => navigate('/selecttool/lower')}  >재활기기선택</Button>

                                    </Col>
                                </Row>

                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>손목</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper align={"flex-end"}>
                                            <Image src={wristTool} width={"100%"}></Image>
                                        </ToolWrapper>
                                    </Col>
                                    <Col span={12} align={"center"} style={{ marginTop: "20px" }}>
                                        <Button block type="primary" onClick={() => navigate('/selecttool/wrist')}  >재활기기선택</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentStyle>
        </>
    )

}


export default Oneself;