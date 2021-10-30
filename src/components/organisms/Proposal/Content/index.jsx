import React from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider } from "../../../index"

import NoticeIdDetailForm from '../NoticeIdDetailForm'

import { useParams, useHistory } from 'react-router-dom';
import { Steps, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



const TotalNoticeContent = ({
    refs,
    isLoading,
    page,
    noticePageNum,
    listTotalData,
    detailNoticeData,

    isProposalDone,
    noticeDetailOnClick,
    stepCurrent,
    stepCurrentOnChange
}) => {

    // console.log("listTotalData , content")
    // console.log(listTotalData)

    const { Step } = Steps;

    const history = useHistory();

    const { id } = useParams();

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={12}>
                        <Row justify={'center'} align={'center'}>
                            <Col span={10} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} weight={'bold'} cursor={'pointer'}
                                    onClick={() => { history.push("/proposal") }}>추천봉사조회</Typo>
                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                        </Row >
                    </Col>
                    <Col xs={10} sm={10} md={0} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'} style={{
                        margin: '0 0 24px 0', position: 'sticky',
                        top: '7.5rem', backgroundColor: '#edeff2', zIndex: '10', padding: '2rem 0 2rem 0'
                    }}>
                        <Row justify={'center'} align={'center'} >
                            <Col xs={12} sm={12} md={12} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'}>
                                <Steps current={stepCurrent} onChange={stepCurrentOnChange} size={'small'} style={{ fontSize: '0.6rem' }}>
                                    <Step title="Step 1" />
                                    <Step title="Step 2" />
                                    <Step title="Step 3" />
                                    <Step title="Step 4" />
                                    <Step title="Step 5" />
                                </Steps>

                            </Col>
                        </Row>
                    </Col>
                    <Col span={9} justify={'center'} align={'center'}>
                        <Row >


                            {/* //TODO 여기  */}
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    isLoading ?
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px", width: "100%", height: "50px" }}>
                                            {
                                                <Spin indicator={antIcon} />
                                            }
                                        </div> : null
                                }
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    (detailNoticeData.id === (id)) ? (
                                        <NoticeIdDetailForm detailData={detailNoticeData}></NoticeIdDetailForm>
                                    ) : (
                                        listTotalData.map((notice, index) => {

                                            const replaceUploadDate = String(notice.uploadDate).slice(0, 8).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');

                                            return (
                                                <React.Fragment key={index}>
                                                    {
                                                        listTotalData.length - 1 === index ? (
                                                            <>

                                                                <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간 : ${replaceUploadDate} | 나이 : ${notice.age} | last`}
                                                                    merit={notice.merit} online={notice.online}></NoticeCardForm>
                                                                {
                                                                    !isProposalDone ?
                                                                        <div ref={refs} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px", width: "100%", height: "50px" }}>
                                                                            {
                                                                                <Spin indicator={antIcon} />
                                                                            }
                                                                        </div> : null
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                                <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간 : ${replaceUploadDate} | 나이 : ${notice.age}`}
                                                                    merit={notice.merit} online={notice.online}></NoticeCardForm>
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
                                    (detailNoticeData.id !== (id) && isProposalDone) ?
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