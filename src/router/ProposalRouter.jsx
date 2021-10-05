import React from "react"
import { useHistory } from "react-router"
import Proposal from "../pages/Proposal"

const ProposalRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <Proposal />
    }

    history.push('/')
    return null
}

export default ProposalRouter