import React from "react"
import { Row, Col } from "../../../layout"
import { Typo, Btn, Img } from "../.."
import writeHand from "../../../assets/icons/writeHand.png"

const AlertModalForm = ({ handleClose }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <Img width={'3rem'} src={writeHand} > </Img>
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>meritShare를 위해 정보를 작성해주세요</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>정보를 작성하지 않을시 봉사를 추천받을수 없습니다.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>작성을 위해 확인을 눌러주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                {/* <Col span={2} justify={'center'}>
                    <Btn size={'large'} block types={"secondary"} value={'취소'} />
                </Col> */}
                <Col span={2} justify={'center'}>
                    <Btn onClick={handleClose} size={'large'} block types={"primary"} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default AlertModalForm