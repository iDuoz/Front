import React from "react";
import styled from "styled-components";
import Header from "../../layout/Header";
import ContentContainer from "../../containers/redux/pages/createnotice/ContentContainer";

const WholeWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
`;



//TODO header
const CreateNotice = () => {



    return (
        <>
            <WholeWrapper>
                <Header position={'sticky'}></Header>
                <ContentContainer />
            </WholeWrapper>
        </>
    );
};

export default CreateNotice;
