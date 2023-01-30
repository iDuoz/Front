import React, { useEffect, useState, useRef } from 'react';

import { Row, Col, ContentStyle, Header } from '../../../../layout'
import SportForm from "../../../molecules/SportForm"
import Image from "../../../atoms/Image"
import wristToolIcon from "../../../../assets/icons/LilltWristTool.png"
import upperToolIcon from "../../../../assets/icons/LilltUpperTool.png"
import upperProgress from "../../../../assets/icons/lilltUpperProgress.png"
import wristProgress from "../../../../assets/icons/LilltwristProgress.png"
import { DatabaseOutlined, EditOutlined, MedicineBoxOutlined, MinusOutlined, PlusOutlined, SoundOutlined } from '@ant-design/icons';

import kg from "../../../../assets/icons/kg.png"

import times from "../../../../assets/icons/times.png"

import volumn from "../../../../assets/icons/volumn.png"
import Typo from "../../../atoms/Typography"
import IconButton from "../../../atoms/Icon"
import { Tabs, Divider, Space, Button } from 'antd';


const ManageContent = ({
    logined,
    uid,
    role,

}) => {

    const [wristOnClick, setWristOnClick] = useState(false)
    const [settingSport, setSettingSport] = useState(false)
    const wristValue = {
        part: "상체",
        set: 4,
        kg: 25,
        time: 15,
        done: 2,
    }

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
            <ContentStyle style={{ padding: '5.2vh 4.2vw 6vh 4.2vw ' }} >
                <Row>
                    <Col span={12}>
                        <SportForm part={"상체"} set={4} kg={"25"} time={"15"} done={2} onClick={() => { setWristOnClick(!wristOnClick); }}></SportForm>

                        {
                            wristOnClick === true ?
                                <>


                                    <Col span={12} style={{ margin: "20px 0", padding: "20px 50px" }} justify={"center"} >
                                        <Tabs defaultActiveKey="1" size={"large"} centered>
                                            <Tabs.TabPane tab=" - 운동기구 - " key="1">
                                                <Col span={12} justify={"center"}>
                                                    <Image src={upperToolIcon} width={"40rem"} ></Image>
                                                </Col>

                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab="- 상체 재활 운동 -" key="2">
                                                <Col span={12} justify={"center"}>
                                                    <Image src={upperProgress} width={"40rem"} />
                                                </Col>
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab="- 설정 변경 -" key="3">
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
                                            </Tabs.TabPane>
                                        </Tabs>
                                    </Col>
                                </>
                                : null


                        }


                    </Col>
                    <Col span={12}>
                        <SportForm part={"손목"} set={3} kg={30} time={10} done={1}></SportForm>
                    </Col>

                </Row>
            </ContentStyle >

        </>
    )
}

export default ManageContent