import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/userProfile/ContentContainer";

const WholeWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

//TODO header
const Home = () => {
    return (
        <>
            <WholeWrapper>
                <ContentContainer />
            </WholeWrapper>
        </>
    );
};

export default Home;
