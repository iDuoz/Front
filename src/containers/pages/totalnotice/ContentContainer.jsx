import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TotalNoticeContent } from '../../../components'
import getTotalNotices from '../../../service/firebase/database/getTotalNotices'



const ContentContainer = () => {
    const [listTotalData, setListTotalData] = useState([])
    useEffect(() => {
        setListTotalData([])
        getTotalNotices()
            .then((res) => {
                console.log(res)
                setListTotalData(res)
            })
            .catch((e) => console.log(e))
    }, [])
    console.log(listTotalData)


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

    return (
        <>
            <TotalNoticeContent
                listTotalData={listTotalData}
                detailNoticeData={detailNoticeData}
                noticeDetailOnClick={noticeDetailOnClick}
            ></TotalNoticeContent>
        </>
    )
}

export default ContentContainer