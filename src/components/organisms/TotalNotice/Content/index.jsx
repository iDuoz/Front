import React from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider } from "../../../index"


import NoticeIdDetailForm from '../NoticeIdDetailForm'

import { useParams, useHistory } from 'react-router-dom';
import { Spin } from 'antd';

const TotalNoticeContent = ({
    refs,
    loading,
    page,
    noticePageNum,
    listTotalData,
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
                                <Typo size={'2rem'} weight={'bold'} cursor={'pointer'}
                                    onClick={() => { history.push("/notice") }}>전체봉사조회</Typo>

                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                            {/* //TODO 여기  */}
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    (detailNoticeData.id === (id)) ? (
                                        <NoticeIdDetailForm detailData={detailNoticeData}></NoticeIdDetailForm>
                                    ) : (
                                        // listTotalData.map((lists, index) => {
                                        //     return <NoticeCardForm key={index} listTitle={lists.title} onClick={() => { noticeDetailOnClick(lists.noticeId) }} noticeId={lists.noticeId}
                                        //         listContent={`지역 : ${lists.region}`}
                                        //         merit={lists.merit}></NoticeCardForm>
                                        // })
                                        listTotalData.map((notice, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    {
                                                        listTotalData.length - 1 === index ? (
                                                            <>
                                                                <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간 : ${notice.uploadDate}`}
                                                                    merit={notice.merit}></NoticeCardForm>
                                                                {
                                                                    page < noticePageNum ?
                                                                        <div ref={refs} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px", width: "100%", height: "50px" }}>
                                                                            {
                                                                                <Spin></Spin>
                                                                            }
                                                                        </div> : null
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                                <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간 : ${notice.uploadDate}`}
                                                                    merit={notice.merit}></NoticeCardForm>

                                                            </>
                                                        )
                                                    }
                                                </React.Fragment>
                                            )

                                        })
                                    )
                                }
                            </Col>
                            <Col span={12} justify={'center'} align={'center'} style={{ margin: "50px  0 20px 0" }}>
                                {
                                    (page === noticePageNum) ?
                                        <Typo size={"1.2rem"} color={'#9baacf'} weight={'550'}>마지막 페이지 입니다.</Typo>
                                        : null
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