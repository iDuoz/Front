import React from "react"
import { Row, Col } from "../../../layout"
import { Typo, Btn } from "../.."
import { MdErrorOutline } from "react-icons/md";

const AlertModalForm = ({ username }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>{username}님 탈퇴하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>탈퇴 시 정보  및 봉사신청이 모두 삭제되며 복구되지 않습니다.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>탈퇴를 원하시면 확인을 눌러주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Btn block types={"secondary"} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Btn block types={"primary"} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default AlertModalForm