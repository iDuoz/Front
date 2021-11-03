import React from "react";
import styled from "styled-components";
import Header from "../../layout/Header";
import ContentContainer from "../../containers/pages/main/ContentContainer";
import { HiArrowSmUp } from "react-icons/hi"
import { BackTop } from 'antd';
import { Icon } from "../../components";

const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  /* border : 3px blue solid; */
`

const ScrollSnapSection = styled.section`
  scroll-snap-align: center;
    scroll-snap-stop: always;
    height : auto;
`


//TODO header
const Main = () => {
    return (
        <>

            <WholeWrapper>
                <ScrollSnapSection>
                    <Header position={'relative'} ></Header>
                </ScrollSnapSection>

                <ContentContainer />
                <BackTop visibilityHeight={100}>
                    <Icon size={'40px'} ><HiArrowSmUp /></Icon>
                </BackTop>
            </WholeWrapper>
        </>
    );
};

export default Main;
