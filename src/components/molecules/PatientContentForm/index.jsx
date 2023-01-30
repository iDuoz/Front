import React from "react"
import styled from "styled-components"
import Typo from "../../atoms/Typography"

import ProgressForm from "../../molecules/ProgressForm"
import { Row, Col } from "../../../layout"
import { Divider, Progress, Button, Radio, InputNumber, Space } from 'antd';
import { SmileOutlined, EditOutlined, FrownOutlined, MinusOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';


//SECTION 피드백 아이콘

const IconBox = styled.div`
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    color : #464646;
    width : 100%;
    height : 100%;
    border: 1px solid #cccccc;
    border-radius : 15px;
    padding: 2rem 0;
    box-sizing: border-box;
    cursor : pointer;
    ${props => props.feedBackValue === props.feedBackDefault ?
        `
  background-color:#464646;
  color : #f7f7f7;
`
        :
        null
    };
`

//!SECTION



const HomeCardForm = ({ infoPart, infoContent, nowRecord, infoRecord = [], patientId, feedbackSubmitOnClick, feedbackIconOnClick, feedbackValue,
    recordOnClick, addSportValue, addSportFunction, addSportSubmit, countRecordNum
}) => {

    const setTypo = (value) => {
        if (value === "upper") return "상체";
        if (value === "wrist") return "손목";
        if (value === "lower") return "하체";
        if (value === "low") return "저강도의";
        if (value === "normal") return "";
        if (value === "high") return "고강도의"
    }
    let setPart = ""

    infoPart.forEach((part) => {
        console.log(part)
        console.log(setTypo(part))
        return setPart = setPart.concat(" ", setTypo(part))
    })


    console.log("🥹")
    console.log(patientId)
    console.log(infoRecord)

    return (

        <>
            <Row align={"center"} justify={"space-between"} gutter={[10, 10]}>
                <Col span={12}>
                    <Typo size={"1.5rem"} color={"#494949"}>진단부위 • 진단내용</Typo>
                </Col>
                <Col span={12} justify={"center"} align={"center"} style={{
                    borderRadius: '10px ',
                    backgroundColor: '#e9e9e9',
                    padding: "2rem 1rem"
                }}>
                    <Typo size={"1.5rem"} weight={"bold"}>주기적인 {setTypo(infoContent)} {setPart}운동 필요</Typo>
                </Col>
                <Col span={12} style={{ marginTop: '1rem' }}>
                    <Typo size={"1.5rem"} color={"#494949"}>피드백 제공</Typo>
                </Col>

                <Col span={12} justify={"center"} align={"center"} style={{
                    borderRadius: '10px ',
                    backgroundColor: '#e9e9e9',
                    padding: "2rem 1rem",
                    boxSizing: 'border-box'
                }}>
                    {
                        (nowRecord[patientId].length === 0) ?
                            <Typo size={"1.5rem"} color={"#979797"}> 피드백 제공을 위해서 운동을 클릭해주세요. </Typo>
                            :
                            <Row justify={'center'} align={"center"} >
                                <Col span={1} justify={'center'} align={"center"}>

                                    <Typo size={"1.5rem"} weight={"bold"}>
                                        {setTypo(nowRecord[patientId][0])}
                                    </Typo>
                                </Col>
                                <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", borderRadius: "15px" }} />

                                <Col span={4} justify={'space-around'} align={"center"}>
                                    <Typo size={"1.5rem"} weight={"900"} >
                                        {nowRecord[patientId][1]}세트
                                    </Typo>

                                    <Typo size={"1.5rem"} weight={"900"} >
                                        {nowRecord[patientId][2]}kg
                                    </Typo>
                                    <Typo size={"1.5rem"} weight={"900"} >
                                        {nowRecord[patientId][3]}회
                                    </Typo>
                                </Col>
                                <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", borderRadius: "15px" }} />

                                <Col span={5} justify={'center'} align={"center"}>
                                    <Progress percent={parseInt(nowRecord[patientId][4] / nowRecord[patientId][1] * 100)} status="active" />
                                </Col>
                            </Row>
                    }

                </Col>

                {/* SECTION 운동 리스트 && 피드백 */}
                <Col span={12} style={{ marginTop: '1rem' }}>

                    <Typo size={"1.5rem"} color={"#494949"}>운동 리스트</Typo>

                    <Row justify={"space-between"}>
                        {
                            (nowRecord[patientId].length === 0) ?
                                <>
                                    <Col span={12}>
                                        {
                                            infoRecord.first ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.first, patientId, "first") }}
                                                    part={setTypo(infoRecord.first[0])} set={infoRecord.first[1]} kg={infoRecord.first[2]} times={infoRecord.first[3]} rate={parseInt(infoRecord.first[4] / infoRecord.first[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.second ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.second, patientId, "second") }}
                                                    part={setTypo(infoRecord.second[0])} set={infoRecord.second[1]} kg={infoRecord.second[2]} times={infoRecord.second[3]} rate={parseInt(infoRecord.second[4] / infoRecord.second[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.third ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.third, patientId, "third") }}
                                                    part={setTypo(infoRecord.third[0])} set={infoRecord.third[1]} kg={infoRecord.third[2]} times={infoRecord.third[3]} rate={parseInt(infoRecord.third[4] / infoRecord.third[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.fourth ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.fourth, patientId, "fourth") }}
                                                    part={setTypo(infoRecord.fourth[0])} set={infoRecord.fourth[1]} kg={infoRecord.fourth[2]} times={infoRecord.fourth[3]} rate={parseInt(infoRecord.fourth[4] / infoRecord.fourth[1] * 100)} /> : null
                                        }

                                    </Col>

                                </>

                                :
                                <>
                                    <Col span={6}>
                                        {
                                            infoRecord.first ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.first, patientId, "first") }}
                                                    part={setTypo(infoRecord.first[0])} set={infoRecord.first[1]} kg={infoRecord.first[2]} times={infoRecord.first[3]} rate={parseInt(infoRecord.first[4] / infoRecord.first[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.second ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.second, patientId, "second") }}
                                                    part={setTypo(infoRecord.second[0])} set={infoRecord.second[1]} kg={infoRecord.second[2]} times={infoRecord.second[3]} rate={parseInt(infoRecord.second[4] / infoRecord.second[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.third ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.third, patientId, "third") }}
                                                    part={setTypo(infoRecord.third[0])} set={infoRecord.third[1]} kg={infoRecord.third[2]} times={infoRecord.third[3]} rate={parseInt(infoRecord.third[4] / infoRecord.third[1] * 100)} /> : null
                                        }
                                        {
                                            infoRecord.fourth ?
                                                <ProgressForm onClick={() => { recordOnClick(infoRecord.fourth, patientId, "fourth") }}
                                                    part={setTypo(infoRecord.fourth[0])} set={infoRecord.fourth[1]} kg={infoRecord.fourth[2]} times={infoRecord.fourth[3]} rate={parseInt(infoRecord.fourth[4] / infoRecord.fourth[1] * 100)} /> : null
                                        }

                                    </Col>
                                    <Col span={5}>
                                        <Row justify={'center'} align={"center"} style={{ border: '1px solid #cccccc', borderRadius: "15px", padding: "1.5rem 0" }}>
                                            <Col span={3}>
                                                목표달성도
                                            </Col>
                                            <Col span={6}>
                                                <Progress percent={parseInt(nowRecord[patientId][4] / nowRecord[patientId][1] * 100)} status="active" size="small" />
                                            </Col>
                                        </Row>
                                        {
                                            nowRecord[patientId][5] === "null" ?
                                                <Row justify={'space-between'} align={'center'} style={{ marginTop: "1rem" }}>
                                                    <Col span={5.7} justify={'center'} align={"center"}>

                                                        <IconBox feedBackDefault={"GOOD"} feedBackValue={feedbackValue[patientId][nowRecord[patientId][6]]} onClick={() => { feedbackIconOnClick(nowRecord[patientId][5], patientId, nowRecord[patientId][6], "GOOD") }}>
                                                            <SmileOutlined style={{ fontSize: "4rem" }} />

                                                            <Typo size={"1.5rem"} color={"inherit"}>GOOD</Typo>
                                                        </IconBox>
                                                    </Col>
                                                    <Col span={5.7} justify={'center'} align={"center"}>
                                                        <IconBox feedBackDefault={"BAD"} feedBackValue={feedbackValue[patientId][nowRecord[patientId][6]]} onClick={() => { feedbackIconOnClick(nowRecord[patientId][5], patientId, nowRecord[patientId][6], "BAD") }}>
                                                            <FrownOutlined style={{ fontSize: "4rem" }} />
                                                            <Typo size={"1.5rem"} color={"inherit"}>BAD</Typo>
                                                        </IconBox>
                                                    </Col>
                                                    <Col span={12} style={{ marginTop: "1rem" }}>
                                                        <Button type="primary" block
                                                            onClick={() => {
                                                                feedbackSubmitOnClick(
                                                                    nowRecord[patientId],
                                                                    patientId,
                                                                )
                                                            }}  >피드백 제출</Button>
                                                    </Col>
                                                </Row>
                                                :
                                                <Row justify={'space-between'} align={'center'} style={{ marginTop: "1rem" }}>
                                                    <Col span={5.7} justify={'center'} align={"center"}>

                                                        <IconBox feedBackDefault={"GOOD"} feedBackValue={nowRecord[patientId][5]} onClick={() => { feedbackIconOnClick(nowRecord[patientId][5], patientId, nowRecord[patientId][6]) }}>
                                                            <SmileOutlined style={{ fontSize: "4rem" }} />

                                                            <Typo size={"1.5rem"} color={"inherit"}>GOOD</Typo>
                                                        </IconBox>
                                                    </Col>
                                                    <Col span={5.7} justify={'center'} align={"center"}>
                                                        <IconBox feedBackDefault={"BAD"} feedBackValue={nowRecord[patientId][5]} onClick={() => { feedbackIconOnClick(nowRecord[patientId][5], patientId, nowRecord[patientId][6]) }}>
                                                            <FrownOutlined style={{ fontSize: "4rem" }} />
                                                            <Typo size={"1.5rem"} color={"inherit"}>BAD</Typo>
                                                        </IconBox>
                                                    </Col>
                                                </Row>
                                        }
                                    </Col>
                                </>

                        }

                    </Row>
                </Col >
                {/* !SECTION 운동 리스트 && 피드백 */}

                {/* SECTION addSport */}
                {
                    (countRecordNum(infoRecord) === undefined) ?
                        null :
                        <>
                            <Col span={12} style={{ marginTop: '1rem' }}>
                                <Typo size={"1.5rem"} color={"#494949"}>운동 스케줄 추가</Typo>
                            </Col>

                            <Col span={12} style={{ margin: '0 2rem' }}>
                                <Row gutter={[10, 0]} justify={'center'} align={"center"}>
                                    <Col span={6} justify={'flex-start'} align={"center"}>

                                        <Typo size={"1.3rem"} color={"#494949"}>운동 부위 선택</Typo>
                                        <Divider type="vertical" style={{ height: "3em", margin: "0 3rem", borderColor: "#cccccc", }} />

                                        <Radio.Group size="large" buttonStyle="outline"
                                            onChange={addSportFunction.type} value={addSportValue.type}>
                                            <Radio.Button value={"upper"}  >상체</Radio.Button>
                                            <Radio.Button value={"lower"} >하체</Radio.Button>
                                            <Radio.Button value={"wrist"} >손목</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                    <Col span={6} justify={'flex-start'} align={"center"}>

                                        <Typo size={"1.3rem"} color={"#494949"}>세트 횟수 선택</Typo>
                                        <Divider type="vertical" style={{ height: "3em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                        <Space size={18} wrap>
                                            <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.setDown}></Button>
                                            <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.set} 세트</Typo>
                                            <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.setUp}></Button>
                                        </Space>
                                    </Col>
                                    <Col span={6} justify={'flex-start'} align={"center"}>

                                        <Typo size={"1.3rem"} color={"#494949"}>중량 무게 선택</Typo>
                                        <Divider type="vertical" style={{ height: "3em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                        <Space size={18} wrap>
                                            <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.kgDown}></Button>
                                            <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.kg} kg</Typo>
                                            <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.kgUp}></Button>
                                        </Space>
                                    </Col>
                                    <Col span={6} justify={'flex-start'} align={"center"}>

                                        <Typo size={"1.3rem"} color={"#494949"}>운동 횟수 선택</Typo>
                                        <Divider type="vertical" style={{ height: "3em", margin: "0 3rem", borderColor: "#cccccc", }} />
                                        <Space size={18} wrap>
                                            <Button size={"large"} icon={<MinusOutlined />} onClick={addSportFunction.timeDown}></Button>
                                            <Typo size={"1.3rem"} border={" solid 3px #1677ff"} padding={"0.5rem "}>{addSportValue.time} 회</Typo>
                                            <Button size={"large"} icon={<PlusOutlined />} onClick={addSportFunction.timeUp}></Button>
                                        </Space>
                                    </Col>
                                    <Col span={12} justify={'flex-end'}>
                                        <Button onClick={() => { addSportSubmit(patientId, infoRecord) }} type="primary" icon={<CheckOutlined />} size={"large"} style={{ height: "3rem", padding: "0 4rem" }}>
                                            스케줄 추가 하기
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </>
                }

                {/* !SECTION addSport */}
            </Row >
        </>


    )

}

export default HomeCardForm;