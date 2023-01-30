import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ContentContainer from "../../containers/pages/SelectTool/ContentContainer";
import { Header } from "../../layout";

const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  /* border : 3px blue solid; */
`
const GlobalStyle = createGlobalStyle`
  html, body {
    scroll-behavior: smooth;
    background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
  }
`;


const PatientInfo = () => {
  return (
    <>
      <GlobalStyle role={"USER"} />
      <WholeWrapper>
        <Header position={"static"}  ></Header>
        <ContentContainer />

      </WholeWrapper>
    </>
  );
};

export default PatientInfo;