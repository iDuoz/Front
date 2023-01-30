import React, { useState } from 'react';
import SelectToolContent from "../../../components/organisms/SelectTool/Content/index"

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
            <SelectToolContent

            />
        </>

    )
}

export default ContentContainer