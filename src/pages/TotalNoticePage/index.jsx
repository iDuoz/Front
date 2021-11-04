import { BackTop } from "antd";
import React from "react";
import { HiArrowSmUp } from "react-icons/hi";
import styled from "styled-components";
import { Icon } from "../../components";
import ContentContainer from "../../containers/pages/totalnotice/ContentContainer";
import { Header } from "../../layout";


const WholeWrapper = styled.div`

background-color: #edeff2;

  height: max-content;
  width: 100%;
`;



//TODO header
const UserProfile = () => {
    return (
        <>
            <WholeWrapper>
                <Header position={'sticky'}></Header>
                <ContentContainer />
                <BackTop visibilityHeight={100}>
                    <Icon size={'40px'} ><HiArrowSmUp /></Icon>
                </BackTop>
            </WholeWrapper>
        </>
    );
};

export default UserProfile;
