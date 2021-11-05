import React from "react"
import { Row, Col } from "../../../layout"
import { Typo, Btn, Img } from "../.."
import { MdErrorOutline } from "react-icons/md";
const AlertDeleteNoticeModalForm = ({ onCancelDeleteBtn, onDeleteBtn }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={45} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>게시물을 삭제하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>확인버튼을 눌러 게시글을 삭제하세요 </Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={2} justify={'center'}>
                    <Btn size={'large'} block types={"secondary"} onClick={onCancelDeleteBtn} value={'취소'} />
                </Col>
                <Col span={2} justify={'center'}>
                    <Btn onClick={onDeleteBtn} size={'large'} block types={"primary"} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default AlertDeleteNoticeModalForm