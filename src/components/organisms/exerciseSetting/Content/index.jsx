import React, { useState } from 'react';
import { Row, Col, ContentStyle } from '../../../../layout'
import Typo from "../../../atoms/Typography"
import Image from '../../../atoms/Image'
import styled from 'styled-components'
import { Divider, Button, Tabs, Space } from "antd"
import { DatabaseOutlined, EditOutlined, MedicineBoxOutlined, MinusOutlined, PlusOutlined, SoundOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom"
import exerciseGraph from "../../../../assets/images/exerciseGraph.png"
import weekly_graph from "../../../../assets/images/weekly_graph.png"
import fit_setting from "../../../../assets/icons/LilltUpperTool.png"
import set_graph from "../../../../assets/images/set_graph.png"
import IconButton from "../../../atoms/Icon"
const ToolWrapper = styled.div`
    width : auto;
    height : 28rem;
    border : ${props => props.border || `2px solid #eaeaea`};
    border-radius:3px;
    box-sizing: border-box;
    background-color: ${props => props.bgColor || `#ffffff8c`};
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
    padding:${props => props.padding || `none`};
`






const ExerciseSetting = () => {
    const navigate = useNavigate();
    const [addSportValue, setAddSportValue] = useState({
        volumn: 50,
        kg: 30,
        time: 10,

    })
    let addSportFunction = {

        volumnUp: () => {
            return setAddSportValue((state) => ({ ...state, volumn: state.volumn + 1 }))
        },
        volumnDown: () => {
            return setAddSportValue((state) => ({ ...state, volumn: state.volumn - 1 }))
        },
        kgUp: () => {
            return setAddSportValue((state) => ({ ...state, kg: state.kg + 5 }))
        },
        kgDown: () => {
            return setAddSportValue((state) => ({ ...state, kg: state.kg - 5 }))
        },
        timeUp: () => {
            return setAddSportValue((state) => ({ ...state, time: state.time + 1 }))
        },
        timeDown: () => {
            return setAddSportValue((state) => ({ ...state, time: state.time - 1 }))
        },
    }

    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"}>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>운동 설정</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 재활운동 정보를 제공하고 운동환경을 설정합니다.
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
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>변화 그래프</Divider>
                                    </Col>
                                    <ToolWrapper align={"flex-start"} justify={"center"} padding={"10px"}>
                                        <Col span={12} justify={"center"} style={{ marginBottom: "5px" }}>
                                            <Typo>일간변화</Typo>
                                        </Col>
                                        <Col span={12} align={"center"} >
                                            <Image src={exerciseGraph} width={"100%"}></Image>
                                        </Col>
                                        <Col span={12} style={{ marginTop: "20px", marginBottom: "5px" }}>
                                            <Typo>주간변화</Typo>
                                        </Col>
                                        <Col span={12} align={"center"} >
                                            <Image src={weekly_graph} width={"100%"}></Image>
                                        </Col>
                                    </ToolWrapper>

                                </Row>


                            </Col>
                            <Col span={4}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>운동설정</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <Row justify={"center"} align={"center"}>
                                            <Col span={12} justify={"center"} align={"center"}>
                                                <IconButton direction={'column'} size={'4rem'} justIcon value={'음량 설정'} >
                                                    <SoundOutlined style={{ fontSize: "2.5rem" }} />
                                                </IconButton>
                                                <Divider type="vertical" style={{ height: "6em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                                <Space size={18} wrap>
                                                    <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.volumnDown}></Button>
                                                    <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.volumn} %</Typo>
                                                    <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.volumnUp}></Button>
                                                </Space>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"}>
                                                <IconButton direction={'column'} size={'4rem'} justIcon value={'중량 설정'} >
                                                    <MedicineBoxOutlined style={{ fontSize: "2.5rem" }} />
                                                </IconButton>
                                                <Divider type="vertical" style={{ height: "6em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                                <Space size={18} wrap>
                                                    <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.kgDown}></Button>
                                                    <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.kg} kg</Typo>
                                                    <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.kgUp}></Button>
                                                </Space>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"}>
                                                <IconButton direction={'column'} size={'4rem'} justIcon value={'횟수 설정'} >
                                                    <DatabaseOutlined style={{ fontSize: "2.5rem" }} />
                                                </IconButton>
                                                <Divider type="vertical" style={{ height: "6em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                                <Space size={18} wrap>
                                                    <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.timeDown}></Button>
                                                    <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.time} 회</Typo>
                                                    <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.timeUp}></Button>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>

                            </Col>
                            <Col span={3}>
                                <Row>
                                    <Col span={12} align={"center"}>
                                        <Divider orientationMargin="0" orientation="left"
                                            style={{ borderTop: "#697592 2px", fontSize: "1.3rem", color: "#717171" }}>운동코스</Divider>
                                    </Col>
                                    <Col span={12} align={"center"}>
                                        <ToolWrapper justify={"flex-start"} align={"flex-end"} border={"none"} bgColor={"#ffffff00"}>
                                            <Image src={set_graph} width={"100%"}></Image>
                                        </ToolWrapper>
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


export default ExerciseSetting;