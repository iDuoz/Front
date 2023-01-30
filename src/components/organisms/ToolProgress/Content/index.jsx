import React from "react";
import { Row, Col, ContentStyle } from '../../../../layout'

import Typo from "../../../atoms/Typography"
import Image from "../../../atoms/Image"
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { Button } from "antd";
import upperTool from "../../../../assets/icons/LilltUpperTool.png"
import lowerTool from "../../../../assets/icons/LilltlowerTool.png"
import wristTool from "../../../../assets/icons/LilltWristTool.png"
import upperProgress from "../../../../assets/images/upperProgress.png"
import lowerProgress from "../../../../assets/images/lowerProgress.png"
import wristProgress from "../../../../assets/images/wristProgress.png"
import progressRate from "../../../../assets/images/progressRate.png"
import exerciseGraph from "../../../../assets/images/exerciseGraph.png"
import leftTime from "../../../../assets/images/leftTime.png"
import strengthNum from "../../../../assets/images/strengthNum.png"

const ToolProgressContent = () => {

    const { tool } = useParams();
    console.log(tool)
    const Tools = {
        upper: {
            title: `상체 재활 운동`,
            toolImage: upperTool,
            toolTitle: `상체재활기구`,
            progressImg: [upperProgress],
            progressRate: progressRate,
            exerciseGraph: exerciseGraph,
            leftTime: leftTime,
            strengthNum: strengthNum
        },
        lower: {
            title: `하체 재활 운동`,
            toolImage: lowerTool,
            toolTitle: `하체재활기구`,
            progressImg: [lowerProgress],
            progressRate: progressRate,
            exerciseGraph: exerciseGraph,
            leftTime: leftTime,
            strengthNum: strengthNum
        },
        wrist: {
            title: `손목 재활 운동`,
            toolImage: wristTool,
            toolTitle: `손목재활기구`,
            progressImg: [wristProgress],
            progressRate: progressRate,
            exerciseGraph: exerciseGraph,
            leftTime: leftTime,
            strengthNum: strengthNum
        }
    }


    const ToolWrapper = styled.div`
    width : auto;
    height :  ${props => props.height || `25rem`};
    border : 2px solid #eaeaea;
    border-radius:3px;
    box-sizing: border-box;
    display : flex;
    flex-direction: column;
    justify-content: ${props => props.justify || `center`};
    align-items:${props => props.align || `center`};
`


    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"} gutter={[10, 0]}>

                    <Col span={3}>
                        <Row gutter={[5, 0]}>
                            <Col span={12}>
                                <Typo size={"1.3rem"} weight={"500"} color={"#717171"}>
                                    {Tools[tool].toolTitle}
                                </Typo>
                            </Col>
                            <Col span={12}>
                                <Image src={Tools[tool].toolImage} width={"100%"} fit={"contain"}></Image>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={4}>
                        <Row gutter={[5, 0]}>
                            <Col span={12} justify={"center"} >
                                <Typo size={"1.3rem"} weight={"500"} color={"#717171"} >
                                    {Tools[tool].title}
                                </Typo>
                            </Col>
                            <Col span={12} justify={"center"} align={"flex-start"}>
                                <Image src={Tools[tool].progressImg[0]} width={"100%"} ></Image>
                            </Col>
                            <Col span={12} justify={"space-between"} align={"flex-start"}>

                                <Col span={5.5} >
                                    <Button block >종료하기</Button>
                                </Col>
                                <Col span={5.5} >
                                    <Button block >이전화면</Button>
                                </Col>

                            </Col>
                        </Row>
                    </Col>
                    <Col span={2}>
                        <Row gutter={[5, 0]}>
                            <Col span={12}  >
                                <Typo size={"1.3rem"} weight={"500"} color={"#717171"} >
                                    운동 진행률
                                </Typo>
                            </Col>
                            <Col span={12} justify={"center"} align={"flex-start"}>
                                <ToolWrapper justify={"center"} align={"center"}>
                                    <Image src={Tools[tool].strengthNum} width={"60%"} fit={"contain"}></Image>
                                    <Typo size={"1.1rem"} weight={"500"} color={"#484848"}>50%의 세기로 진행중 입니다.</Typo>
                                </ToolWrapper>
                            </Col>
                            <Col span={12}>
                                <Typo size={"1.3rem"} weight={"500"} color={"#717171"} >
                                    진행률
                                </Typo>
                            </Col>
                            <Col span={12}>
                                <Image src={Tools[tool].progressRate} width={"100%"}></Image>
                            </Col>
                            <Col span={12}>
                                <Typo size={"1.3rem"} weight={"500"} color={"#717171"} >
                                    남은 시간
                                </Typo>
                            </Col>
                            <Col span={12}>
                                <Image src={Tools[tool].leftTime} width={"100%"}></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default ToolProgressContent