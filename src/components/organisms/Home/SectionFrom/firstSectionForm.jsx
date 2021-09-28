import React from 'react';
import styled from 'styled-components';
import { BsChevronDoubleDown } from "react-icons/bs"

const Section = styled.div`
margin : 0;
 background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;
  height: 130vh;
  position: fixed;
  width: 100%;
  transform: translateY(30vh);
  transition : all 1.2s cubic-bezier(0.22, 0.44, 0, 1);
  background-image: url(${props => props.backgroundImg});
  background-color : ${props => props.backGroundColor};
  z-index : ${props => props.zIndex};
  &:before {
    content: '';
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(0, 0, 0, 0.3); */
}
${props => (props.index === 0) ? `
transform: translateY(-15vh);

` : null}

 ${props => (props.sectionScrollType === "up-scroll") ?
        `transform: translate3d(0,30vh, 0);`
        : null}


${props => (props.sectionScrollType === "down-scroll") ?
        `transform: translate3d(0, -130vh, 0);`
        : `transform: translate3d(0, 30vh,0);`
    }
${props => (props.index === props.currentSlider) ?
        `transform: translate3d(0, -15vh, 0);` : null
    }
`
const ContentWrapper = styled.div`
margin : 0;
height: 100vh;
/* overflow: hidden; */
    display: flex;
    justify-content: center;
    text-align: center;
    flex-flow: column nowrap;
    color: #fff;
    font-family: Montserrat;
    text-transform: uppercase;
    transform: translateY(40vh);
    will-change: transform;
    backface-visibility: hidden;
    transition : all 1.7s cubic-bezier(0.22, 0.44, 0, 1);
    ${props => (props.index === 0) ? `
    transform: translateY(15vh);` : null}
 ${props => (props.sectionScrollType === "up-scroll") ?
        `transform: translateY(30vh);`
        : null}


${props => (props.sectionScrollType === "down-scroll") ?
        `transform: translateY(40vh);`
        : `transform: translateY(30vh);`
    }

${props => (props.index === props.currentSlider) ?
        `transform: translateY(15vh);` : null
    }
`



const ConstTitle = styled.div`
margin : 0;
 font-size: 12vh;
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
            <Section
                index={0}
                currentSlider={currentSlider}
                sectionScrollType={sectionScrollType}
                backGroundColor={'#edeff2'}
                zIndex={3}

            >
                <ContentWrapper
                    index={0}
                    currentSlider={currentSlider}
                    sectionScrollType={sectionScrollType}
                >
                    <ConstTitle >
                        Full Page Parallax Effect
                    </ConstTitle>
                    <ContentSubTitle>
                        Scroll down and up to see the effect!
                    </ContentSubTitle>
                    <DownIcon onClick={settingMobileBtn.pageDown}>
                        <BsChevronDoubleDown />
                    </DownIcon>


                </ContentWrapper>


            </Section>

        </>
    )
}


export default FirstSectionForm