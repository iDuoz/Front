import React from "react"
import { Row, Col } from "../../../layout"
import { Typo, Btn, Img } from "../.."
import writeHand from "../../../assets/icons/writeHand.png"

const AlertLoginModalForm = ({ SignUpOpenNewbeModal, loginOpenNewbeModal }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <Img width={'3rem'} src={writeHand} > </Img>
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>meritShare를 위해 로그인을 해주세요</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>회원가입을 하지 않았을 경우 회원가입을 진행해 주세요.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>해당하는 버튼을 누르면 바로 로그인/회원가입으로 이동합니다. </Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={2} justify={'center'}>
                    <Btn size={'large'} block types={"secondary"} onClick={loginOpenNewbeModal} value={'로그인'} />
                </Col>
                <Col span={2} justify={'center'}>
                    <Btn onClick={SignUpOpenNewbeModal} size={'large'} block types={"primary"} value={'회원가입'} />
                </Col>
            </Row>
        </>
    )
}

export default AlertLoginModalForm