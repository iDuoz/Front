import { notification } from "antd"
import React from "react"
import { useHistory } from "react-router"
import CreateNotice from "../pages/CreateNotice"

const CreateNoticeRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <CreateNotice />
    }

    history.push('/')
    notification['error']({
        message: `μ κ·Ό μ€ν¨ π¦`,
        description: 'λ‘κ·ΈμΈμ΄ νμνκ±°λ κΆνμ΄ μμ΅λλ€.',
    })

    return null
}

export default CreateNoticeRouter