import { notification } from "antd"
import React from "react"
import { useHistory } from "react-router"
import TotalNotice from "../pages/TotalNoticePage"

const TotalNoticeRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <TotalNotice />
    }

    history.push('/')
    notification['error']({
        message: `접근 실패 💦`,
        description: '로그인이 필요하거나 권한이 없습니다.',
    })

    return null
}

export default TotalNoticeRouter