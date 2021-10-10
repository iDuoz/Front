import React from 'react'
import { Col, Row } from "../../../../layout/index"
import { DetailNoticeForm, IframeBox, Typo } from '../../..'

const NoticeIdDetailForm = ({ detailData }) => {
    console.log("this")
    console.log(detailData)
    return (
        <>
            <Row>
                <Col span={12}>
                    <Typo weight={'bold'} full size={'2.3rem'} > {detailData.title}</Typo>
                </Col>
                <Col span={12} style={{ marginTop: '1rem' }}>
                    <DetailNoticeForm merit={detailData.merit} online={detailData.online}
                        region={detailData.region} age={detailData.age} />
                </Col>
                <Col span={12}>
                    <IframeBox src={detailData.url} height={'50rem'}></IframeBox>
                </Col>
            </Row>
        </>
    )
}

export default NoticeIdDetailForm;
