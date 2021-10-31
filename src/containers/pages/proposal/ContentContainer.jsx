import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import ProposalContent from "../../../components/organisms/Proposal/Content/index"
import { useInView } from "react-intersection-observer"
import proposalLogic from "../../../service/proposal/logic/proposalLogic"
import { notification } from 'antd'

const ContentContainer = ({
    basic,
    merit,
    regions,
}) => {

    const myMerits = []
    for (let i in merit) {
        if (merit[i] === true) {
            if (i === 'online') continue;
            myMerits.push(i);
        }
    }

    /**
       * @description 5개씩 받아와서 + 하는 list */
    const [listTotalData, setListTotalData] = useState([])

    const [isProposalDone, SetIsProposalDone] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const [ref, inView] = useInView()

    const [precedence, setPrecedence] = useState(1)
    const [meritIndex, setMeritIndex] = useState(0);




    const [isNextPro, setIsNextPro] = useState(false)

    useEffect(() => {
        console.log("⏩⏩⏩⏩")
        if (precedence === 1) {
            console.log('precedence === 1')
            console.log(`meritIndex = ${meritIndex}`)
            console.log(`myMerits.length = ${myMerits.length}`)
            if (meritIndex === myMerits.length) {
                console.log("🐱‍🚀🐱‍🚀👻👻 | 다음 우선순위로")
                return setIsNextPro(true)
            }
            if (meritIndex < myMerits.length) {
                console.log(meritIndex)
                proposalLogic(precedence, meritIndex)()
                    .then((doc) => {
                        console.log(doc)
                        if (doc.size === 0) {
                            // console.log('size === 0')
                            setIsLoading(true)
                            // setListTotalData((state) => (state.concat([{
                            //     age: "",
                            //     merit: "",
                            //     noticeId: "",
                            //     online: "",
                            //     region: "",
                            //     title: "추천게시물이 없습니다.",
                            //     uploadDate: "",
                            //     url: ""
                            // }])))
                            setIsLoading(false)
                        }
                        if (doc.size > 0) {
                            setIsLoading(true)
                            const lists = [];
                            doc.forEach((doc) => {
                                lists.push(doc.data())
                            })
                            setListTotalData((state) => (state.concat(lists)));
                            setIsLoading(false)
                        }
                    })
                    .catch((e) => console.log(e))
                setIsLoading(false)
                setIsNextPro(false)
            }
        }
        if (precedence === 2) {
            console.log('precedence === 2')
            console.log(`meritIndex = ${meritIndex}`)
            console.log(`myMerits.length = ${myMerits.length}`)
            if (meritIndex === myMerits.length) {
                console.log("🐱‍🚀🐱‍🚀👻👻 | 다음 우선순위로")
                return setIsNextPro(true)
            }
            if (meritIndex < myMerits.length) {
                console.log(meritIndex)
                proposalLogic(precedence, meritIndex)()
                    .then((doc) => {
                        console.log(doc)
                        if (doc.size === 0) {
                            // console.log('size === 0')
                            setIsLoading(true)
                            // setListTotalData((state) => (state.concat([{
                            //     age: "",
                            //     merit: "",
                            //     noticeId: "",
                            //     online: "",
                            //     region: "",
                            //     title: "추천게시물이 없습니다.",
                            //     uploadDate: "",
                            //     url: ""
                            // }])))
                            setIsLoading(false)
                        }
                        if (doc.size > 0) {
                            setIsLoading(true)
                            const lists = [];
                            doc.forEach((doc) => {
                                lists.push(doc.data())
                            })
                            setListTotalData((state) => (state.concat(lists)));
                            setIsLoading(false)
                        }
                    })
                    .catch((e) => console.log(e))
                setIsLoading(false)
                setIsNextPro(false)
            }
        }
        if (precedence === 3) {
            console.log('precedence === 3')
            console.log(`meritIndex = ${meritIndex}`)
            console.log(`myMerits.length = ${myMerits.length}`)
            if (meritIndex === myMerits.length) {
                console.log("🐱‍🚀🐱‍🚀👻👻 | 다음 우선순위로")
                return setIsNextPro(true)
            }
            if (meritIndex < myMerits.length) {
                console.log(meritIndex)
                proposalLogic(precedence, meritIndex)()
                    .then((doc) => {
                        console.log(doc)
                        if (doc.size === 0) {
                            // console.log('size === 0')
                            setIsLoading(true)
                            // setListTotalData((state) => (state.concat([{
                            //     age: "",
                            //     merit: "",
                            //     noticeId: "",
                            //     online: "",
                            //     region: "",
                            //     title: "추천게시물이 없습니다.",
                            //     uploadDate: "",
                            //     url: ""
                            // }])))
                            setIsLoading(false)
                        }
                        if (doc.size > 0) {
                            setIsLoading(true)
                            const lists = [];
                            doc.forEach((doc) => {
                                lists.push(doc.data())
                            })
                            setListTotalData((state) => (state.concat(lists)));
                            setIsLoading(false)
                        }
                    })
                    .catch((e) => console.log(e))
                setIsLoading(false)
                setIsNextPro(false)
            }
        }
        if (precedence === 4) {
            console.log('precedence === 4')
            console.log(`meritIndex = ${meritIndex}`)
            console.log(`myMerits.length = ${6 - myMerits.length}`)
            if (meritIndex === 6 - myMerits.length) {
                console.log("🐱‍🚀🐱‍🚀👻👻 | 다음 우선순위로")
                return setIsNextPro(true)
            }
            if (meritIndex < 6 - myMerits.length) {
                console.log(meritIndex)
                proposalLogic(precedence, meritIndex)()
                    .then((doc) => {
                        console.log(doc)
                        if (doc.size === 0) {
                            // console.log('size === 0')
                            setIsLoading(true)
                            // setListTotalData((state) => (state.concat([{
                            //     age: "",
                            //     merit: "",
                            //     noticeId: "",
                            //     online: "",
                            //     region: "",
                            //     title: "추천게시물이 없습니다.",
                            //     uploadDate: "",
                            //     url: ""
                            // }])))
                            setIsLoading(false)
                        }
                        if (doc.size > 0) {
                            setIsLoading(true)
                            const lists = [];
                            doc.forEach((doc) => {
                                lists.push(doc.data())
                            })
                            setListTotalData((state) => (state.concat(lists)));
                            setIsLoading(false)
                        }
                    })
                    .catch((e) => console.log(e))
                setIsLoading(false)
                setIsNextPro(false)
            }
        }
        if (precedence === 5) {
            console.log('precedence === 5')
            console.log('done')
            if (meritIndex === 1) {
                console.log("🐱‍🚀🐱‍🚀👻👻 | 다음 우선순위로")
                return setIsNextPro(true)
            }
            if (meritIndex === 0) {
                console.log(meritIndex)
                proposalLogic(precedence, meritIndex)()
                    .then((doc) => {
                        console.log(doc)
                        if (doc.size === 0) {
                            // console.log('size === 0')
                            setIsLoading(true)
                            // setListTotalData((state) => (state.concat([{
                            //     age: "",
                            //     merit: "",
                            //     noticeId: "",
                            //     online: "",
                            //     region: "",
                            //     title: "추천게시물이 없습니다.",
                            //     uploadDate: "",
                            //     url: ""
                            // }])))
                            setIsLoading(false)
                        }
                        if (doc.size > 0) {
                            setIsLoading(true)
                            const lists = [];
                            doc.forEach((doc) => {
                                lists.push(doc.data())
                            })
                            setListTotalData((state) => (state.concat(lists)));
                            setIsLoading(false)
                        }
                    })
                    .catch((e) => console.log(e))
                setIsLoading(false)
                setIsNextPro(false)
            }
        }
        if (precedence === 6) {
            console.log("needTo💣💣STOP")
            setIsLoading(false)
            setIsNextPro(false)
            return SetIsProposalDone(true)
        }
        setIsLoading(false)
    }, [meritIndex, precedence, myMerits.length])




    useEffect(() => {
        console.log("🐱‍🚀🐱‍🚀👻👻 | infinity scroll")
        console.log(`isLoading : ${isLoading}`)
        console.log(`isNextPro : ${isNextPro}`)
        if (inView && !isLoading && !isProposalDone && isNextPro) {
            setMeritIndex(0)
            setPrecedence((state) => state + 1)
        }

        if (inView && !isLoading) {
            if (isNextPro) return console.log("merit 못올라가게");
            console.log('meritIndex ++')
            setMeritIndex((state) => state + 1)
        }
    }, [inView, isLoading, isProposalDone, isNextPro])








    //NOTE detail notice data
    const [detailNoticeData, setDetailNoticeData] = useState({
        id: "",
        title: "",
    });
    const history = useHistory();

    const noticeDetailOnClick = (id) => {
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



    //NOTE steps onClick 

    const stepRef = useRef([]);
    const [stepCurrent, setStepCurrent] = useState(0)
    const stepCurrentOnChange = (current) => {
        if (!stepRef.current[current]) {
            return notification['info']({
                message: `추천봉사를 로드해 주세요 🕵️‍♂️`,
                description: '스크롤을 내려 추천봉사를 가져와 주세요.',
            })

        }
        console.log(stepRef.current[current])
        console.log(current)
        stepRef.current[current].scrollIntoView();
        setStepCurrent(current)
    }

    useEffect(() => {
        if (precedence > 5) return null
        setListTotalData((state) => (state.concat([{
            age: "",
            merit: "",
            noticeId: "",
            online: "",
            region: "",
            title: `${precedence}번째 추천 게시물`,
            uploadDate: "",
            url: "",
            precedence: precedence
        }])))
    }, [precedence])

    const changeStep = (entires) => {
        entires.forEach(entry => {
            if (entry.isIntersecting) {
                for (let i = 0; i < 5; i++) {
                    if (stepRef.current[i] !== entry.target) continue;
                    if (stepRef.current[i] === entry.target) return setStepCurrent(i)

                }
            }
        })
    }

    const observerOption = { rootMargin: '-20% 0px -30% 0px ', threshold: 1 };


    const tabObserver = new IntersectionObserver(
        changeStep,
        observerOption
    );

    stepRef.current.forEach(tab => tabObserver.observe(tab));


    const [isOpenDescription, setIsOpenDescription] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })



    const openOnclick = (noticePrecedence) => {
        const number = noticePrecedence;
        isOpenDescription[number] === false ? setIsOpenDescription((state) => ({ ...state, [number]: true })) : setIsOpenDescription((state) => ({ ...state, [number]: false }))
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

                stepRef={stepRef}
                stepCurrent={stepCurrent}
                stepCurrentOnChange={stepCurrentOnChange}
                isOpenDescription={isOpenDescription}
                openOnclick={openOnclick}
            ></ProposalContent>
        </>
    )
}

export default ContentContainer