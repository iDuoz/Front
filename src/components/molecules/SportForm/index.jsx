import React from "react";

import { Row, Col, ContentStyle } from "../../../layout"
import styled from "styled-components"
import Typo from "../../atoms/Typography"
import { Divider, Progress } from "antd"

const CardWrapper = styled.div`
transition: all 0.5s ease;
margin : 15px 0;
padding : 20px 20px 15px 20px;
width : 100%;
  height : 10rem;
  border-radius: 11px;
  cursor: pointer;
  box-shadow: 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #fff;
display : flex;
justify-content : center;
align-items : center;
  `


const SportCard = ({ part, set, kg, time, done, onClick }) => {
    return (
        <>
            <Row justify={'space-between'} align={'center'} >
                <Col justify={'center'} align={'center'} xs={0} sm={0} md={11} lg={11} xl={11} xxl={11}>

                    <CardWrapper onClick={onClick}>
                        <Row justify={'center'} align={"center"} >
                            <Col span={1} justify={'center'} align={"center"}>

                                <Typo size={"1.5rem"} weight={"bold"}>
                                    {part}
                                </Typo>
                            </Col>
                            <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", borderRadius: "15px" }} />

                            <Col span={4} justify={'space-around'} align={"center"}>
                                <Typo size={"1.5rem"} weight={"900"} >
                                    {set}세트
                                </Typo>

                                <Typo size={"1.5rem"} weight={"900"} >
                                    {kg}kg
                                </Typo>
                                <Typo size={"1.5rem"} weight={"900"} >
                                    {time}회
                                </Typo>
                            </Col>
                            <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", borderRadius: "15px" }} />

                            <Col span={5} justify={'center'} align={"center"}>
                                <Progress percent={parseInt(done / set * 100)} status="active" />
                            </Col>
                        </Row>
                    </CardWrapper>

                </Col>
            </Row>

        </>
    )


}

export default SportCard;