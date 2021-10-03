import React from "react"
import { useHistory } from "react-router"
import TotalNotice from "../pages/TotalNoticePage"

const TotalNoticeRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <TotalNotice />
    }

    history.push('/')
    return null
}

export default TotalNoticeRouter