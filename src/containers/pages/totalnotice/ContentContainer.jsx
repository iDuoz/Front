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
        console.log(id);
        setDetailNoticeData((state) => ({ ...state, id: id }));
        // listTotalData.includes((list))
        // TODO noticeId 찾아서 setting
    }

    return (
        <>
            <TotalNoticeContent
                listTotalData={listTotalData}

            ></TotalNoticeContent>
        </>
    )
}

export default ContentContainer