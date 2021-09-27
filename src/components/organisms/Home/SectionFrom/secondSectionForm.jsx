import React from 'react';
import styled from 'styled-components';


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
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
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



const ConstTitle = styled.p`
margin : 0;
 font-size: 12vh;
    line-height: 1.4;
`
const ContentSubTitle = styled.p`
margin : 0;
`



const SecondSectionForm = ({ currentSlider, sectionScrollType, }) => {



    return (
        <>
            <Section
                index={1}
                currentSlider={currentSlider}
                sectionScrollType={sectionScrollType}
                backgroundImg={'https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg'}
                zIndex={2}
            >
                <ContentWrapper index={1} currentSlider={currentSlider} sectionScrollType={sectionScrollType}>
                    <ConstTitle>
                        Cras lacinia non eros nec semper.
                    </ConstTitle>
                    <ContentSubTitle>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.
                    </ContentSubTitle>
                </ContentWrapper>
            </Section>

        </>
    )
}


export default SecondSectionForm