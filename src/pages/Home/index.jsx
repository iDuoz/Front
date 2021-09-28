import React from "react";
import styled from "styled-components";
import Header from "../../layout/Header";
import ContentContainer from "../../containers/pages/home/ContentContainer";

const WholeWrapper = styled.div`
  height: 100vmin;
  width: 100vmax;
`;



//TODO header
const Home = () => {
    return (
        <>
            <WholeWrapper>
                <Header></Header>
                <ContentContainer />
            </WholeWrapper>
        </>
    );
};

export default Home;
