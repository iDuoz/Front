import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TotalNoticeContent } from '../../../components'
import getFirstNoticePage from '../../../service/firebase/database/getFirstNoticePage'
import getNextNoticePage from '../../../service/firebase/database/getNextNoticePage'
import getTotalNoticeNum from '../../../service/firebase/database/getTotalNoticeNum'
import deleteNotice from "../../../service/firebase/database/deleteNotice"
import { useInView } from "react-intersection-observer"


const ContentContainer = ({ role }) => {

    /**
     * @description 5개씩 받아와서 + 하는 list */
    const [listTotalData, setListTotalData] = useState([])
    const [noticePageNum, setNoticePageNum] = useState(0);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const [nextPageStartVisible, setNextPageStartVisible] = useState()

    const [noticeTotalNum, setNoticeTotalNum] = useState(0)

    const [ref, inView] = useInView()

    /**
     * @description listTotalData 가져와서 setPageNum 하기 */
    useEffect(() => {
        setLoading(false)
        getTotalNoticeNum()
            .then((res) => {
                console.log(res.count)
                setNoticeTotalNum(res.count)
                const totalNum = res.count
                setNoticePageNum(Math.ceil(totalNum / 5));
                console.log("페이지수" + Math.ceil(totalNum / 5))
            })
            .catch((e) => { console.log("페이지수 못불러옴") })
    }, [])

    useEffect(() => {
        setLoading(false)
        setPage(1)
        setNoticePageNum(Math.ceil(noticeTotalNum / 5));
        console.log("페이지수" + Math.ceil(noticeTotalNum / 5))
    }, [noticeTotalNum])

    /**
 * @description 서버에서 아이템을 가지고 오는 함수 */
    const getNotices = useCallback(async () => {
        setLoading(true)

        if (page === 1) {
            // NOTE 첫번째 페이지 받아오기
            await getFirstNoticePage()
                .then((res) => {
                    console.log("서버에서 아이템 가져옴")
                    setListTotalData(res.notices);
                    //NOTE 다음페이지 가져오기위해서 다음 페이지 세팅
                    setNextPageStartVisible(res.lastNotice)
                    setLoading(false)
                })
                .catch((e) => console.log(e))
            console.log('page===1')
            setLoading(false)
        }
        if (page > 1 && nextPageStartVisible) {
            setLoading(true)
            //NOTE 두번쟤 페이지가져오기
            await getNextNoticePage(nextPageStartVisible)
                .then((res) => {
                    setListTotalData((state) => (state.concat(res.notices)));
                    // NOTE 그다음 페이지 가져올거 세팅
                    setNextPageStartVisible(res.lastNotice)
                    setLoading(false)
                })
                .catch((e) => console.log(e))
            console.log('page>1 && page<=total')
            setLoading(false)
        }
        if (page > noticePageNum) {
            setLoading(false)
            console.log("page 끝")
        }
        setLoading(false)
    }, [page])


    /**
     * @description `getItems` 가 바뀔 때 마다 함수 실행 */
    useEffect(() => {
        getNotices()
        setLoading(false)
    }, [getNotices, page, noticeTotalNum])

    /**
     * @description page ++ */
    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            console.log("page++")
            setPage(state => state + 1)
        }
        if (inView && !nextPageStartVisible) {
            setPage(noticePageNum + 3)
        }
    }, [inView, loading, nextPageStartVisible])



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
                history.push("/notice/" + lists.noticeId + "/" + lists.title.replace(/ /g, "-"));
            }
        })

    }

    const [isDeleteModal, setIsDeleteModal] = useState(false)
    const [deleteNoticeId, setDeleteNoticeId] = useState(null)
    const [deleteNoticeMerit, setDeleteNoticeMerit] = useState(null)
    const handleDeleteModal = {
        show: () => setIsDeleteModal(true),
        close: () => setIsDeleteModal(false)
    }



    const onClickToDelete = (id, merit) => {
        console.log("ADMIN")
        console.log(id)
        console.log(merit)
        setDeleteNoticeId(id)
        setDeleteNoticeMerit(merit)
        handleDeleteModal.show()

    }

    const onDeleteBtn = async () => {
        console.log("샤ㅏㄱ제아이디 세팅 됨?")
        console.log(deleteNoticeId, deleteNoticeMerit)
        await deleteNotice(deleteNoticeId, deleteNoticeMerit, noticeTotalNum)
            .then(() => {
                console.log("삭제완료")
                setDeleteNoticeMerit(null)
                setDeleteNoticeId(null)
                handleDeleteModal.close()
                setPage(1)
                setNoticeTotalNum(noticeTotalNum - 1)


            })
            .catch((e) => console.log(e))


    }
    const onCancelDeleteBtn = () => {
        setDeleteNoticeId(null)
        setDeleteNoticeMerit(null)
        handleDeleteModal.close()
    }

    console.log("🎃🎃")
    console.log(noticeTotalNum)
    console.log("🎃🎃")
    console.log(page)
    return (
        <>
            <TotalNoticeContent
                role={role}
                refs={ref}
                loading={loading}
                page={page}
                noticePageNum={noticePageNum}
                listTotalData={listTotalData}
                detailNoticeData={detailNoticeData}
                noticeDetailOnClick={noticeDetailOnClick}
                onClickToDelete={onClickToDelete}

                isDeleteModal={isDeleteModal}
                onDeleteBtn={onDeleteBtn}
                handleDeleteModal={handleDeleteModal}
                onCancelDeleteBtn={onCancelDeleteBtn}
            ></TotalNoticeContent>
        </>
    )
}

export default ContentContainer