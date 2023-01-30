import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/redux/pages/manage/ContentContainer";
import { Header } from "../../layout";

const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
`


//TODO header
const Main = () => {
    return (
        <>

            <WholeWrapper>
                <Header position={"static"}></Header>

                <ContentContainer />

            </WholeWrapper>
        </>
    );
};

export default Main;
