import React from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider } from "../../../index"
const TotalNoticeContent = () => {

    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={8} justify={'center'} align={'center'}>
                        <Row >
                            <Col span={12} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} >전체봉사조회</Typo>
                                <Divider marginTop={'1rem'}></Divider>
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                <NoticeCardForm merit={'a'}></NoticeCardForm>
                                <NoticeCardForm merit={'b'}></NoticeCardForm>
                                <NoticeCardForm merit={'c'}></NoticeCardForm>
                                <NoticeCardForm merit={'d'}></NoticeCardForm>
                                <NoticeCardForm merit={'a'}></NoticeCardForm>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default TotalNoticeContent