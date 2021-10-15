import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronDoubleDown } from "react-icons/bs"
import { Btn, HomeSectionForm } from "../../../"
import TypoHighlight from "../../../atoms/TypoHighlight"

const ConstTitle = styled.div`
margin : 0;
 font-size: 10rem;
    line-height: 1.4;
`

const ContentSubTitle = styled.div`
margin : 0;
`

const DownIcon = styled.div`
position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 4.5rem;
    width: 60px;
    font-size: 30px;
    color: #919191dd;
    z-index: 11;
    opacity: 1;
    filter: alpha(opacity=100);
    cursor: pointer;
    -webkit-animation: glow 4s infinite;
    animation: glow 4s infinite;
    @keyframes glow {
  0% {
    opacity:1;
    filter:alpha(opacity=100);
  }
  
  50% {
    opacity:0.3;
    filter:alpha(opacity=30);
    -webkit-transform:translateY(10px);
            transform:translateY(10px);

  }}

   @media(max-width: 1200px) {
    bottom: 5rem;
      }
      @media(max-width: 1024px) {
        bottom: 6rem;
      }
      @media(max-width: 768px) {
        bottom: 7rem;
      }

`

const FirstSectionForm = ({ currentSlider, sectionScrollType, settingMobileBtn, }) => {




    return (
        <>
            <HomeSectionForm backGroundColor={'#edeff2'} pageIndex={0} currentSlider={currentSlider} sectionScrollType={sectionScrollType}>
                <ConstTitle style={{ color: '#979797' }} >
                    iDuoz : <TypoHighlight highLightColor={'#8abdff84;'} fontSize={'10rem'}>MeritShare</TypoHighlight>
                </ConstTitle>
                <ContentSubTitle style={{ color: '#afafaf' }}>
                    Scroll down and up please!
                </ContentSubTitle>
                <DownIcon onClick={settingMobileBtn.pageDown}>
                    <BsChevronDoubleDown />
                </DownIcon>
            </HomeSectionForm>
        </>
    )
}


export default FirstSectionForm