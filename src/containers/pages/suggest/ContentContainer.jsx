import React, { useState, useEffect } from 'react';
import SuggestContent from "../../../components/organisms/Suggest/Content/index"
import { createGlobalStyle } from 'styled-components';
import getPatientData from "../../../service/firebase/database/getPatientData"
import editPatient from "../../../service/firebase/database/editPatientData"

const GlobalStyle = createGlobalStyle`

html,body {
    background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
}
`

const ContentContainer = ({
    logined,
    uid,
    role,

}) => {



    return (
        <>
            <GlobalStyle role={role} />
            <SuggestContent
                logined={logined}
                uid={uid}
                role={role}

            ></SuggestContent>
        </>
    )
}

export default ContentContainer