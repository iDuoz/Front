import React, { useCallback, useEffect, useState } from 'react'
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

    /**
     * @description 5개씩 받아와서 + 하는 list */
    const [listTotalData, setListTotalData] = useState([])

    const [isProposalDone, SetIsProposalDone] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [nextPageStartVisible, setNextPageStartVisible] = useState(null)

    const [ref, inView] = useInView()


    //////////////////////////////////////////////////////////
    const [meritIndex, setMeritIndex] = useState(0);



    useEffect(() => {
        // if(meritIndex >2) return null;
        setListTotalData([])
        setIsLoading(true)
        proposalLogic(null, 1)().then((res) => {
            setListTotalData((state) => (state.concat(res.notices)));
            if (res.notices.length < 5) {
                console.log("🐱‍👤🕵️‍♀️ : 첫번쨰!꺼!만!")
                setMeritIndex((state) => state + 1)
                return SetIsProposalDone(true)
            }
            return setNextPageStartVisible(res.lastNotice);
        })
        setIsLoading(false)
    }, [])


    useEffect(() => {
        if (inView && !isLoading && nextPageStartVisible && meritIndex < 3 && !isProposalDone) {
            setIsLoading(true)
            proposalLogic(nextPageStartVisible, 1)().then((res) => {
                setListTotalData((state) => (state.concat(res.notices)));
                if (!res.lastNotice) {
                    console.log("🐱‍👤🕵️‍♀️")
                    setNextPageStartVisible(null)
                    setMeritIndex((state) => state + 1)
                    return SetIsProposalDone(true)
                }
                return setNextPageStartVisible(res.lastNotice);
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