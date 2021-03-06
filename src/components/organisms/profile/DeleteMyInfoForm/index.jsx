/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: eun.π
 * @Last Modified time: 2021-10-03 08:03:38
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"

const DeleteMyInfoForm = ({ username, okDeleteConfirmOnclick, cancelDeleteConfirmOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>{username}λ νν΄νμκ² μ΅λκΉ?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>νν΄ μ μ λ³΄κ° λͺ¨λ μ­μ λλ©° λ³΅κ΅¬λμ§ μμ΅λλ€.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>νν΄λ₯Ό μνμλ©΄ νμΈμ λλ¬μ£ΌμΈμ.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={cancelDeleteConfirmOnclick} value={'μ·¨μ'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={okDeleteConfirmOnclick} value={'νμΈ'} />
                </Col>
            </Row>
        </>
    )
}

export default DeleteMyInfoForm