import React from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider, ProposalTitleFrom } from "../../../index"

import NoticeIdDetailForm from '../NoticeIdDetailForm'

import { useParams, useHistory } from 'react-router-dom';
import { Steps, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



const TotalNoticeContent = ({
    refs,
    isLoading,
    listTotalData,
    detailNoticeData,

    isProposalDone,
    noticeDetailOnClick,

    stepRef,
    stepCurrent,
    stepCurrentOnChange,
    isOpenDescription,
    openOnclick,
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
                <Row justify={'center'} align={'center'}>
                    <Col span={12}>
                        <Row justify={'center'} align={'center'}>
                            <Col span={10} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} weight={'bold'} cursor={'pointer'}
                                    onClick={() => { history.push("/proposal") }}>추천봉사조회</Typo>
                            </Col>
                        </Row >
                        <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                    </Col>
                </Row>
                {/* <Row justify={'center'} align={'center'} style={{
                    position: 'sticky', top: '7.5rem'
                }} >
                    <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'} style={{
                        margin: '0 0 24px 0', position: 'sticky',
                        top: '7.5rem', backgroundColor: '#edeff2', zIndex: '10', padding: '2rem 0 2rem 0'
                    }} >
                        <Steps current={stepCurrent}
                            onChange={stepCurrentOnChange}
                            size='small'
                            type="navigation"
                            className="site-navigation-steps"
                            style={{ fontSize: '0.6rem' }}>
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                        </Steps>
                    </Col>
                </Row> */}


                <Row justify={'flex-end'} align={'start'}>
                    <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'} style={{
                        margin: '0 0 24px 0', position: 'sticky',
                        top: '7.5rem', backgroundColor: '#edeff2', zIndex: '10', padding: '2rem 0 2rem 0', right: '0', left: '0'
                    }} >
                        <Steps current={stepCurrent}
                            onChange={stepCurrentOnChange}
                            size='small'
                            type="navigation"
                            className="site-navigation-steps"
                            style={{ fontSize: '0.6rem' }}>
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                        </Steps>
                    </Col>
                    <Col xs={0} sm={3} md={3} lg={3} xl={3} xxl={3} span={3} justify={'center'} align={'center'} style={{
                        margin: '15px 0 24px 0', position: 'sticky',
                        top: '12rem', zIndex: '10'
                    }}>
                        <Row justify={'center'} align={'center'} >
                            <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} justify={'center'} align={'center'}>
                                <Steps current={stepCurrent}
                                    onChange={stepCurrentOnChange}
                                    size='small'
                                    direction="vertical"
                                >
                                    <Step title="Step 1" />
                                    <Step title="Step 2" />
                                    <Step title="Step 3" />
                                    <Step title="Step 4" />
                                    <Step title="Step 5" />
                                </Steps>

                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={9} span={9} justify={'center'} align={'center'}>
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
                                                                {
                                                                    (notice.precedence) ?
                                                                        <ProposalTitleFrom isOpenDescription={isOpenDescription[notice.precedence]}
                                                                            openOnclick={() => { openOnclick(notice.precedence) }} number={notice.precedence}
                                                                            description={notice.title}
                                                                            stepRef={stepRef}
                                                                        ></ProposalTitleFrom>
                                                                        : <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                            listContent={`지역 : ${notice.region} | 업로드 시간 : ${replaceUploadDate} | 나이 : ${notice.age} | last`}
                                                                            merit={notice.merit} online={notice.online}></NoticeCardForm>
                                                                }


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
                                                                {
                                                                    (notice.precedence) ?
                                                                        <ProposalTitleFrom isOpenDescription={isOpenDescription[notice.precedence]}
                                                                            openOnclick={() => { openOnclick(notice.precedence) }} number={notice.precedence}
                                                                            description={notice.title}
                                                                            stepRef={stepRef}
                                                                        ></ProposalTitleFrom> :
                                                                        <NoticeCardForm listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                            listContent={`지역 : ${notice.region} | 업로드 시간 : ${replaceUploadDate} | 나이 : ${notice.age}`}
                                                                            merit={notice.merit} online={notice.online}></NoticeCardForm>
                                                                }
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