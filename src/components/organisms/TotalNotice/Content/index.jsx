import React, { useEffect, useState } from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider, Modal } from "../../../index"
import getTotalNotices from '../../../../service/firebase/database/getTotalNotices'
import addNotices from '../../../../service/firebase/database/addNotices'
import addRegion from "../../../../service/firebase/database/addRegion"

import AlertModalForm from "../../../molecules/AlertModalForm"

import NoticeIdDetailForm from '../NoticeIdDetailForm'

import { useParams, useHistory } from 'react-router-dom';


const TotalNoticeContent = ({ listTotalData,
    detailNoticeData,
    noticeDetailOnClick, }) => {

    console.log("listTotalData , content")
    console.log(listTotalData)

    const history = useHistory();

    const { id } = useParams();
    console.log(useParams())
    console.log(detailNoticeData.id)
    console.log(detailNoticeData.id === id)

    console.log("noticeDetail")
    console.log(detailNoticeData)
    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={9} justify={'center'} align={'center'}>
                        <Row >
                            <Col span={12} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} weight={'bold'} cursor={'pointer'} onClick={() => { history.push("/notice") }}>전체봉사조회</Typo>
                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                            {/* //TODO 여기  */}
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    (detailNoticeData.id === (id)) ? (
                                        <NoticeIdDetailForm detailData={detailNoticeData}></NoticeIdDetailForm>
                                    ) : (
                                        listTotalData.map((lists, index) => {
                                            return <NoticeCardForm key={index} listTitle={lists.title} onClick={() => { noticeDetailOnClick(lists.noticeId) }} noticeId={lists.noticeId}
                                                listContent={`지역 : ${lists.region}`}
                                                merit={lists.merit}></NoticeCardForm>
                                        })
                                    )
                                }
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default TotalNoticeContent