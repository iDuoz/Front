import React, { useState, useEffect, useCallback } from "react"
import { Col, Row, ContentStyle } from "../../../../layout"
import { NoticeCardForm, Typo, Divider } from "../../../index"
import { useInView } from "react-intersection-observer"
import getTotalNotices from "../../../../service/firebase/database/getTotalNotices"
import { Spin } from 'antd';

const ProposalContent = () => {

    // TODO 전체 notice수 받아와서 몇번 통신해야하는지 (pageTotalNum) 알아내서 page< pageTotalNum
    // TODO  getTotalNotice 제대로 끝나는거 에서 새로 받아오게 하기
    // TODO code TotalNotice로 옮기기

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const [ref, inView] = useInView()

    console.log(items)
    // 서버에서 아이템을 가지고 오는 함수
    const getItems = useCallback(async () => {
        setLoading(true)
        // await axios.get(`${Your Server Url}/page=${page}`).then((res) => {
        //   setItems(prevState => [...prevState, res])
        // })
        if (page === 1) {

            await getTotalNotices()
                .then((res) => {
                    console.log("서버에서 아이템 가져옴")
                    // console.log(res)

                    setItems((state) => (state.concat(res)));

                    // setItems(...state => state, res)
                })
                .catch((e) => console.log(e))
        }
        if (page === 2) {

            await getTotalNotices()
                .then((res) => {
                    console.log("서버에서 아이템 가져옴")
                    // console.log(res)

                    setItems((state) => (state.concat(res)));

                    // setItems(...state => state, res)
                })
                .catch((e) => console.log(e))
        }
        if (page >= 3) {
            console.log("page 끝")
        }

        setLoading(false)
    }, [page])

    // `getItems` 가 바뀔 때 마다 함수 실행
    useEffect(() => {
        getItems()
    }, [getItems])

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            console.log("page++")
            setPage(state => state + 1)
        }
    }, [inView, loading])



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
                                {
                                    items.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            {
                                                items.length - 1 === idx ? (
                                                    <>
                                                        <NoticeCardForm listTitle={item.title} noticeId={item.noticeId}
                                                            listContent={`지역 : ${item.region}`}
                                                            merit={item.merit}></NoticeCardForm>
                                                        <div ref={ref} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px", width: "100%", height: "50px" }}>
                                                            {
                                                                loading ?
                                                                    <Spin></Spin> :
                                                                    null
                                                            }
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <NoticeCardForm listTitle={item.title} noticeId={item.noticeId}
                                                            listContent={`지역 : ${item.region}`}
                                                            merit={item.merit}></NoticeCardForm>

                                                    </>
                                                )
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                {
                                    (page > 3) ?
                                        <Typo size={"1.1rem"} color={'#9baacf'} weight={'550'}>마지막 페이지 입니다.</Typo>
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

export default ProposalContent;
