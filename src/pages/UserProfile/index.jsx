import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/redux/pages/profile/ContentContainer";
import { Header } from "../../layout";


const WholeWrapper = styled.div`

background-color: #edeff2;

  height: 100%;
  width: 100%;
`;



//TODO header
const UserProfile = () => {
    return (
        <>
            <WholeWrapper>
                <Header position={'sticky'}></Header>
                <ContentContainer />
            </WholeWrapper>
        </>
    );
};

export default UserProfile;
