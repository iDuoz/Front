import React, { useEffect, useState } from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider, Modal } from "../../../index"
import getTotalNotices from '../../../../service/firebase/database/getTotalNotices'
import addNotices from '../../../../service/firebase/database/addNotices'
import addRegion from "../../../../service/firebase/database/addRegion"

import AlertModalForm from "../../../molecules/AlertModalForm"

const TotalNoticeContent = ({ listTotalData }) => {

    console.log("listTotalData , content")
    console.log(listTotalData)


    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalhandle = () => {
        setIsModalOpen((state) => (!state))
    }


    const handle = () => {
        getTotalNotices()
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
    }


    const addhandle = () => {
        addNotices()
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }

    const addregionhandle = () => {
        addRegion("인천")
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }

    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={9} justify={'center'} align={'center'}>
                        <Row >
                            <Col span={12} style={{ marginTop: '24px' }}>



                                <Typo size={'2rem'} weight={'bold'} >전체봉사조회</Typo>
                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    listTotalData.map((lists, index) => {
                                        return <NoticeCardForm key={index} listTitle={lists.title}
                                            listContent={`지역 : ${lists.region}`}
                                            merit={lists.merit}></NoticeCardForm>
                                    })
                                }
                                {/* <NoticeCardForm merit={'active'}></NoticeCardForm>
                                <NoticeCardForm merit={'eco'}></NoticeCardForm>
                                <NoticeCardForm merit={'animal'}></NoticeCardForm>
                                <NoticeCardForm merit={'disaster'}></NoticeCardForm>
                                <NoticeCardForm merit={'farming'}></NoticeCardForm> */}
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}

export default TotalNoticeContent