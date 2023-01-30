import React from "react"
import styled from "styled-components"
import Typo from "../../atoms/Typography"
import { Row, Col } from "../../../layout"
import { Divider, Progress } from 'antd';


const ProgressBox = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content:space-evenly;
    align-items:center;
    cursor: pointer;
`


const ProgressForm = ({ part, set, kg, times, rate, onClick }) => {
    return (

        <Row justify={'center'} align={"center"} style={{
            margin: "10px 0",
            borderTop: "1px solid #cccccc",
            borderBottom: "1px solid #cccccc"
        }}>
            <ProgressBox onClick={onClick} >
                <Col span={1} justify={'center'} align={"center"}>
                    <Typo size={"1rem"} weight={"bold"}>
                        {part}
                    </Typo>
                </Col>
                <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", }} />

                <Col span={4} justify={'space-around'} align={"center"}>
                    <Typo size={"1rem"} weight={"900"} >
                        {set}세트
                    </Typo>

                    <Typo size={"1rem"} weight={"900"} >
                        {kg}kg
                    </Typo>
                    <Typo size={"1rem"} weight={"900"} >
                        {times}회
                    </Typo>
                </Col>
                <Divider type="vertical" style={{ height: "5rem", borderColor: "#cccccc", borderLeftWidth: "2px", borderRadius: "15px" }} />

                <Col span={5} justify={'center'} align={"center"}>
                    <Progress percent={rate} />
                </Col>
            </ProgressBox>
        </Row>

    )



}

export default ProgressForm