import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ContentContainer from "../../containers/pages/Schedule/ContentContainer.jsx";
import { Header } from "../../layout";

const GlobalStyle = createGlobalStyle`

html,body {
    background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
}
`
const Schedule = () => {
  return (
    <>
      <GlobalStyle role={"USER"} />
      <Header position={"static"} ></Header>
      <ContentContainer></ContentContainer>

    </>
  );
};

export default Schedule;