import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/main/ContentContainer";


const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  /* border : 3px blue solid; */
`


//TODO header
const Main = () => {
    return (
        <>

            <WholeWrapper>
                {/* <ScrollSnapSection> */}

                <ContentContainer />

            </WholeWrapper>
        </>
    );
};

export default Main;
