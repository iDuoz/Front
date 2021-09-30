import React from "react"
import { useHistory } from "react-router"
import UserPage from "../pages/CreateNotice"

const UserPageRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <UserPage />
    }

    history.push('/')
    return null
}

export default UserPageRouter