import React from "react"
import { Col, Row, ContentStyle } from "../../../../layout"
import { NoticeCardForm, Typo, Divider } from "../../../index"

const ProposalContent = () => {


    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={8} justify={'center'} align={'center'}>
                        <Row >
                            <Col span={12} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} weight={'bold'} >추천봉사조회</Typo>
                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                <NoticeCardForm merit={'active'}></NoticeCardForm>
                                <NoticeCardForm merit={'eco'}></NoticeCardForm>
                                <NoticeCardForm merit={'animal'}></NoticeCardForm>
                                <NoticeCardForm merit={'disaster'}></NoticeCardForm>
                                <NoticeCardForm merit={'farming'}></NoticeCardForm>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default ProposalContent;