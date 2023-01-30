import React from "react"
import styled from "styled-components"
import Typo from "../../atoms/Typography"
import { Row, Col } from "../../../layout"
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';



const HomeCardForm = ({ infoName, infoAge, infoBirth, infoSex }) => {


    return (

        <>
            <Row align={"center"} justify={"space-between"} gutter={[10, 10]}>
                <Col span={4} justify={"center"} align={"center"}>
                    <Col span={12} justify={"center"} align={"center"} >
                        <Avatar size={100} icon={<UserOutlined />} />
                    </Col>
                    <Col span={12} justify={"center"} align={"center"}>
                        <Typo size={"1.3rem"} weight={"500"}>{infoName}</Typo>
                    </Col>
                </Col>
                <Col span={6}>
                    <Col span={12} justify="space-between">
                        <Typo size={"1.3rem"} weight={"500"} >나이</Typo>
                        <Typo size={"1.3rem"} weight={"500"}>{infoAge}</Typo>
                    </Col>
                    <Col span={12} justify="space-between">
                        <Typo size={"1.3rem"} weight={"500"}>생년월일</Typo>
                        <Typo size={"1.3rem"} weight={"500"}>{infoBirth}</Typo>
                    </Col>
                    <Col span={12} justify="space-between">
                        <Typo size={"1.3rem"} weight={"500"}>성별</Typo>
                        <Typo size={"1.3rem"} weight={"500"}>{infoSex}</Typo>
                    </Col>
                </Col>
            </Row>
        </>


    )

}

export default HomeCardForm;