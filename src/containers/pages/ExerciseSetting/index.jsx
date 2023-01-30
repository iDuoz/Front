import React from "react";
import ExerciseSettingContent from "../../../components/organisms/exerciseSetting/Content";


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
            <ExerciseSettingContent />
        </>

    )
}


export default ContentContainer