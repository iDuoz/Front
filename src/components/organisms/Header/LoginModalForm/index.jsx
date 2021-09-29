import React from "react";
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography/index"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
const LoginModalForm = () => {

    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>채은님 신청취소하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>신청취소시 -설명-</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>신청취소를 원하시면 확인을 눌러주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} value={'확인'} />
                </Col>
            </Row>
        </>
    )

}


export default LoginModalForm