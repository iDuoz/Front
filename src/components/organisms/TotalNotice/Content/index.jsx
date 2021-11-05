import React from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider, Modal, AlertDeleteNoticeModalForm } from "../../../index"


import NoticeIdDetailForm from '../NoticeIdDetailForm'

import { useParams, useHistory } from 'react-router-dom';
import { Spin } from 'antd';

const TotalNoticeContent = ({
    role,
    refs,
    loading,
    page,
    noticePageNum,
    listTotalData,
    detailNoticeData,
    noticeDetailOnClick,

    isDeleteModal,
    onDeleteBtn,
    handleDeleteModal,
    onClickToDelete,
    onCancelDeleteBtn
}) => {


    const history = useHistory();

    const { id } = useParams();



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

                                            const replaceUploadDate = String(notice.uploadDate).slice(0, 8).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');

                                            return (
                                                <React.Fragment key={index}>
                                                    {
                                                        listTotalData.length - 1 === index ? (
                                                            <>
                                                                <NoticeCardForm onClickToDelete={() => { onClickToDelete(notice.noticeId, notice.merit) }} role={role} listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간: ${replaceUploadDate}  | 나이: ${notice.age}`}
                                                                    merit={notice.merit} online={notice.online}></NoticeCardForm>
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
                                                                <NoticeCardForm onClickToDelete={() => { onClickToDelete(notice.noticeId, notice.merit) }} role={role} listTitle={notice.title} noticeId={notice.noticeId} onClick={() => { noticeDetailOnClick(notice.noticeId) }}
                                                                    listContent={`지역 : ${notice.region} | 업로드 시간: ${replaceUploadDate}  | 나이: ${notice.age}`}
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
                                    (detailNoticeData.id !== (id) && page === noticePageNum) ?
                                        <Typo size={"1.2rem"} color={'#9baacf'} weight={'550'}>마지막 페이지 입니다.</Typo>
                                        : null
                                }
                            </Col>
                        </Row>

                    </Col>
                    <Col span={12}>
                        <Modal visible={isDeleteModal} maskClosable={false} headerClose
                            onClose={handleDeleteModal.close} size={7}>
                            <AlertDeleteNoticeModalForm onCancelDeleteBtn={onCancelDeleteBtn} onDeleteBtn={onDeleteBtn}></AlertDeleteNoticeModalForm>
                        </Modal>
                    </Col>
                </Row>
            </ContentStyle >
        </>
    )
}

export default TotalNoticeContent