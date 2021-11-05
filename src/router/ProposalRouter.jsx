import { notification } from "antd"
import React from "react"
import { useHistory } from "react-router"
import Proposal from "../pages/Proposal"

const ProposalRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <Proposal />
    }
    notification['error']({
        message: `접근 실패 💦`,
        description: '로그인과 profile정보 입력이 필요합니다.',
    })
    history.push('/')
    return null
}

export default ProposalRouter