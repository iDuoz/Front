import React from "react";
import styled from "styled-components";
import Header from "../../layout/Header";
import ContentContainer from "../../containers/pages/main/ContentContainer";


const WholeWrapper = styled.div`
  height: 100%;
  width: 100%;
`;



//TODO header
const Main = () => {
    return (
        <>
            <WholeWrapper>
                <Header position={'sticky'} ></Header>
                <ContentContainer />
            </WholeWrapper>
        </>
    );
};

export default Main;
