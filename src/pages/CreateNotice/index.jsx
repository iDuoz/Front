import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../../layout/Header";
import ContentContainer from "../../containers/pages/createnotice/ContentContainer";

const WholeWrapper = styled.div`
  height: 100%;
  width: 100%;
`;



//TODO header
const CreateNotice = () => {

    const headerRef = useRef(null);
    useEffect(() => {
        console.log(headerRef.current)
    }, [])

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
