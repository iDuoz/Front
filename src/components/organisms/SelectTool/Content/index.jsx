import React from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'

import Typo from "../../../atoms/Typography"
import Image from "../../../atoms/Image"
import styled from 'styled-components'
import { Divider } from "antd"
import upperTool from '../../../../assets/icons/LilltUpperTool.png'
import lowerTool from '../../../../assets/icons/LilltlowerTool.png'
import wristTool from '../../../../assets/icons/LilltWristTool.png'
import { AppstoreAddOutlined, } from '@ant-design/icons';
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "antd"


const ToolWrapper = styled.div`
    width : 100%;
    height : 25rem;
    border : 2px solid #eaeaea;
    border-radius:3px;
    box-sizing: border-box;
    background-color: #ffffff8c;
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
`



const SelectToolContent = ({

}) => {

    const navigate = useNavigate();
    const { body } = useParams();
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
                            <Col span={2}>
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
                                        {
                                            (body === "upper") ?
                                                <Button type={"primary"} block onClick={() => navigate('/toolprogress/upper')}  >바로가기</Button> :
                                                <Button block onClick={() => navigate('/toolprogress/upper')}  >바로가기</Button>
                                        }

                                    </Col>
                                </Row>


                            </Col>
                            <Col span={2}>
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
                                        {
                                            (body === "lower") ?
                                                <Button type={"primary"} block onClick={() => navigate('/toolprogress/lower')}  >바로가기</Button> :
                                                <Button block onClick={() => navigate('/toolprogress/lower')}  >바로가기</Button>
                                        }

                                    </Col>
                                </Row>

                            </Col>
                            <Col span={2}>
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
                                        {
                                            (body === "wrist") ?
                                                <Button type={"primary"} block onClick={() => navigate('/toolprogress/wrist')}  >바로가기</Button> :
                                                <Button block onClick={() => navigate('/toolprogress/wrist')}  >바로가기</Button>

                                        }

                                    </Col>
                                </Row>

                            </Col>
                            <Col span={2}>
                                <Col span={12} align={"center"}>
                                    <Divider orientationMargin="0" orientation="left"
                                        style={{ borderTop: "#f6f6f6 2px", fontSize: "1.3rem", color: "#f6f6f6" }}>-</Divider>
                                </Col>
                                <Col span={12} align={"center"}>
                                    <ToolWrapper>
                                        <AppstoreAddOutlined style={{ fontSize: "4rem", marginBottom: "20px", color: "#7b7b7b" }} />

                                        <Typo color={"#717171"} size-={"1rem"}>추가 예정 기기 준비중 </Typo>
                                    </ToolWrapper>
                                </Col>
                            </Col>

                            <Col span={2}>
                                <Col span={12} align={"center"}>
                                    <Divider orientationMargin="0" orientation="left"
                                        style={{ borderTop: "#f6f6f6 2px", fontSize: "1.3rem", color: "#f6f6f6" }}>-</Divider>
                                </Col>
                                <Col span={12} align={"center"}>
                                    <ToolWrapper>
                                        <AppstoreAddOutlined style={{ fontSize: "4rem", marginBottom: "20px", color: "#7b7b7b" }} />

                                        <Typo color={"#717171"} size-={"1rem"}>추가 예정 기기 준비중 </Typo>
                                    </ToolWrapper>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default SelectToolContent