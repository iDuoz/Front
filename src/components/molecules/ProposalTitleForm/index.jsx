import React, { useState } from "react"
import { Row, Col } from "../../../layout/index";
import styled from "styled-components"

import { BsEmojiHeartEyesFill, BsEmojiHeartEyes, BsEmojiLaughingFill, BsEmojiLaughing, BsEmojiSmile, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

const ProposalTitleWrapper = styled.div`
  width: 20rem;
  width : ${props => props.isOpenDescription ? `70%` : `20rem`};
  height : ${props => props.isOpenDescription ? `auto` : `4rem`};
  /* height: 4rem; */
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  transition: all 1s ease;
`

const SmallGridContainer = styled.div`
 grid-column: 2/3;
  grid-row: 3/4;
  width: 100%;
  height : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProposalTitleIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0 0 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: #6d5dfc;
`
const ProposalTitleTypo = styled.div`
  font-size: ${props => props.isOpenDescription ? `1.5rem` : `1.1rem`};
  transition: all 0.5s ease;
  margin-left: -1.8rem;
  color: #5b0eeb;
  font-weight : bold;
`

const ProposalContentWrapper = styled.div`
transition: all 0.5s ease;
padding : 1.2rem 0.5rem;
`

const ProposalContentTypo = styled.div`
transition: all 0.5s ease;
  font-size: 1.3rem;
 width : 100%;
 height : auto;
 padding : 0.5rem 1.5rem;
  color: #7481a0;
  font-weight : bold;
  display : ${props => props.isOpenDescription ? `flex` : `none`};
`


const ProposalTItleAddBtn = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.5rem;
  display: flex;
  font-size: 1.6rem;
  color: #bec8e4;
  cursor: pointer;
`



const ProposalTitleForm = ({ isOpenDescription,
    openOnclick, number, description, stepRef }) => {

    const proposalTitle = {
        1: "1step 추천 봉사",
        2: "2step 추천 봉사",
        3: "3step 추천 봉사",
        4: "4step 추천 봉사",
        5: "5step 추천 봉사"
    }
    const proposalMeritContent = {
        1: "내가 선택한 merit",
        2: "내가 선택한 merit",
        3: "내가 선택하지 않은 merit",
        4: "내가 선택하지 않은 merit",
        5: "online merit"
    }
    const proposalRegionContent = {
        1: "내가 선택한 지역",
        2: "내가 선택한 추가지역",
        3: "내가 선택한 지역",
        4: "내가 선택한 추가지역",
        5: "online merit"
    }

    return (
        <Row>
            <Col justify={'center'} align={'center'} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <ProposalTitleWrapper isOpenDescription={isOpenDescription} ref={el => (stepRef.current[number - 1] = el)} >
                    <SmallGridContainer>
                        <ProposalTitleIcon>
                            {
                                (number === 1) ? <BsEmojiHeartEyesFill></BsEmojiHeartEyesFill> :
                                    (number === 2) ? <BsEmojiHeartEyes></BsEmojiHeartEyes> :
                                        (number === 3) ? <BsEmojiLaughingFill></BsEmojiLaughingFill> :
                                            (number === 4) ? <BsEmojiLaughing></BsEmojiLaughing> :
                                                (number === 5) ? <BsEmojiSmile></BsEmojiSmile> : null
                            }
                        </ProposalTitleIcon>
                        <ProposalTitleTypo isOpenDescription={isOpenDescription}>{proposalTitle[number]}</ProposalTitleTypo>


                        <ProposalTItleAddBtn onClick={openOnclick} >
                            {
                                (isOpenDescription) ? <BsCaretUpFill></BsCaretUpFill> : <BsCaretDownFill></BsCaretDownFill>
                            }

                        </ProposalTItleAddBtn>
                    </SmallGridContainer>
                    <ProposalContentWrapper>
                        <ProposalContentTypo isOpenDescription={isOpenDescription}>{proposalMeritContent[number]}</ProposalContentTypo>
                        <ProposalContentTypo isOpenDescription={isOpenDescription}>{proposalRegionContent[number]}</ProposalContentTypo>
                    </ProposalContentWrapper>

                </ProposalTitleWrapper>

            </Col>
        </Row>
    )




}

export default ProposalTitleForm