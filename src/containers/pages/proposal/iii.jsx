import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProposalContent from "../../../components/organisms/Proposal/Content/index"
import getProposalNotice from '../../../service/proposal/firebase/getTopFilterNotice'
import { useInView } from "react-intersection-observer"
import proposalLogic from "../../../service/proposal/logic/onlineTrue"


const ContentContainer = ({
    basic,
    merit,
    regions,
}) => {
    console.log(basic)
    console.log(merit)
    console.log(regions)
    /**
     * @description 5개씩 받아와서 + 하는 list */
    const [listTotalData, setListTotalData] = useState([])

    const [isProposalDone, SetIsProposalDone] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [nextPageStartVisible, setNextPageStartVisible] = useState(null)

    const [ref, inView] = useInView()

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //SECTION test
    //NOTE top FIlter - age
    const [firstIndex, setFirstIndex] = useState(0)
    //NOTE logic Test console보기
    useEffect(() => {
        console.log("💝💘")
        proposalLogic(null, 0)()
            .then((res) => {
                console.log("💝")
                console.log(res)
            })

    }, [])


    //!SECTION test
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * @description `getItems` 가 바뀔 때 마다 함수 실행 */
    useEffect(() => {
        setListTotalData([])
        setIsLoading(true);
        // getProposalNotice()
        //     .then((res) => {
        //         console.log("첫번쨰page")
        //         console.log(res)
        //         setListTotalData((state) => (state.concat(res.notices)));
        //         if (res.notices.length < 6) {
        //             console.log("🐱‍👤🕵️‍♀️ : 첫번쨰!꺼!만!")
        //             return SetIsProposalDone(true)
        //         }
        //         setNextPageStartVisible(res.lastNotice);
        //         setIsLoading(false)
        //     })

        // if (!nextPageStartVisible) {
        //     proposalLogic(null, firstIndex)()
        //     .then((res) => {
        //         console.log("첫번쨰page")
        //         console.log(res)
        //         setListTotalData((state) => (state.concat(res.notices)));
        //         if (res.notices.length < 6) {
        //             console.log("🐱‍👤🕵️‍♀️ : 첫번쨰!꺼!만!")
        //             return setFirstIndex((state) => state + 1)


        //         }
        //         setNextPageStartVisible(res.lastNotice);
        //         setIsLoading(false)
        //     })
        // }

        setIsLoading(false)
    }, [firstIndex, nextPageStartVisible])

    useEffect(() => {
        if (firstIndex === 3) {
            return SetIsProposalDone(true)
        }
        setNextPageStartVisible(null)
    }, [firstIndex])

    /**
     * @description 서버에서 아이템을 가지고 오는 함수 */
    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !isLoading && nextPageStartVisible && !isProposalDone) {
            setIsLoading(true)

            if (firstIndex === 3) {
                console.log('firstIndex ===3')
                return SetIsProposalDone(true)
            }

            // getProposalNotice(nextPageStartVisible)
            //     .then((res) => {
            //         console.log("서버에서 다음 페이지 아이템 가져옴")
            //         // console.log(res.notices)

            //         console.log(res.lastNotice || 'lastPage')
            //         setListTotalData((state) => (state.concat(res.notices)));
            //         if (!res.lastNotice) {
            //             console.log("🐱‍👤🕵️‍♀️")
            //             return SetIsProposalDone(true)
            //         }
            //         setNextPageStartVisible(res.lastNotice || null)
            //         setIsLoading(false)
            //     })
            //     .catch((e) => {
            //         console.log(e)
            //         setIsLoading(false)
            //     })


            proposalLogic(nextPageStartVisible, firstIndex)()
                .then((res) => {
                    console.log("서버에서 다음 페이지 아이템 가져옴")
                    // console.log(res.notices)

                    console.log(res.lastNotice || 'lastPage')
                    setListTotalData((state) => (state.concat(res.notices)));
                    if (!res.lastNotice) {
                        console.log("🐱‍👤🕵️‍♀️")
                        setNextPageStartVisible(null)
                        return setFirstIndex((state) => state + 1)
                        // return SetIsProposalDone(true)
                    }
                    setNextPageStartVisible(res.lastNotice || null)
                    setIsLoading(false)
                })

            setIsLoading(false)
        }
    }, [inView, isLoading])



    //NOTE detail notice data
    const [detailNoticeData, setDetailNoticeData] = useState({
        id: "",
        title: "",
    });
    const history = useHistory();

    const noticeDetailOnClick = (id) => {
        console.log("onclick")
        console.log(id);
        setDetailNoticeData((state) => ({ ...state, id: id }));
        listTotalData.forEach((lists) => {
            if (lists.noticeId === id) {
                setDetailNoticeData((state) => ({
                    ...state,
                    title: lists.title,
                    url: lists.url,
                    merit: lists.merit,
                    noticeId: lists.noticeId,
                    region: lists.region,
                    online: lists.online,
                    age: lists.age,
                }))
                history.push("/proposal/" + lists.noticeId + "/" + lists.title.replace(/ /g, "-"));
            }
        })

    }

    return (
        <>
            <ProposalContent
                refs={ref}
                isLoading={isLoading}
                isProposalDone={isProposalDone}
                listTotalData={listTotalData}
                detailNoticeData={detailNoticeData}
                noticeDetailOnClick={noticeDetailOnClick}
            ></ProposalContent>
        </>
    )
}

export default ContentContainer