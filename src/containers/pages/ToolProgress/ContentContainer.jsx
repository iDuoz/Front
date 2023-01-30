import React, { useState } from 'react';
import ToolProgressContent from "../../../components/organisms/ToolProgress/Content/index"
import { createGlobalStyle } from 'styled-components';

const ContentContainer = () => {

    const GlobalStyle = createGlobalStyle`

    html,body {
        background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
    }
    `




    return (
        <>
            <GlobalStyle role={"USER"} />
            <ToolProgressContent

            />
        </>

    )
}

export default ContentContainer