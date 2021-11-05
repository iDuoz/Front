import { notification } from "antd"
import React from "react"
import { useHistory } from "react-router"
import UserPage from "../pages/UserProfile"

const UserPageRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <UserPage />
    }

    history.push('/')
    notification['error']({
        message: `접근 실패 💦`,
        description: '로그인이 필요하거나 권한이 없습니다.',
    })
    return null
}

export default UserPageRouter