import React, { useEffect, useState } from 'react'
import { NoticeCardForm } from '../../../index'
import { Col, Row, ContentStyle } from '../../../../layout'
import { Typo, Divider } from "../../../index"
import getTotalNotices from '../../../../service/firebase/database/getTotalNotices'
const TotalNoticeContent = () => {

    const [listTotalData, setListTotalData] = useState([])

    const [isHeart, setIsHeart] = useState()
    const handleIsHeart = () => {
        (isHeart ? setIsHeart(false) : setIsHeart(true))
    }

    useEffect(() => {
        setListTotalData([])
        getTotalNotices('YbWKY3tk96RZEXeJxCZG')
            .then((res) => {
                console.log(res)
                setListTotalData((state) => [...state, res])
            })
            .catch((e) => console.log(e))
        getTotalNotices('y7EIenLyoZaOPoTSWRj1')
            .then((res) => {
                console.log(res)
                setListTotalData((state) => [...state, res])
            })
            .catch((e) => console.log(e))
    }, [])

    console.log(listTotalData)

    return (
        <>
            <ContentStyle>
                <Row justify={'center'} align={'center'} >
                    <Col span={8} justify={'center'} align={'center'}>
                        <Row >
                            <Col span={12} style={{ marginTop: '24px' }}>
                                <Typo size={'2rem'} weight={'bold'} >전체봉사조회</Typo>
                                <Divider marginTop={'1rem'} borderWidth={'1px'}></Divider>
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    listTotalData.map((lists, index) => {
                                        return <NoticeCardForm key={index} listTitle={lists.title} isHeart={isHeart}
                                            handleIsHeart={handleIsHeart}
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