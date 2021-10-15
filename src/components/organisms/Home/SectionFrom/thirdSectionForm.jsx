import React from 'react';
import styled from 'styled-components';
import { HomeSectionForm } from '../../..';


const ConstTitle = styled.p`
margin : 0;
 font-size: 12vh;
    line-height: 1.4;
`
const ContentSubTitle = styled.p`
margin : 0;
`


const ThirdSectionForm = ({ currentSlider, sectionScrollType, }) => {



    return (
        <>
            <HomeSectionForm backGroundColor={'#edeff2'} pageIndex={2} currentSlider={currentSlider} sectionScrollType={sectionScrollType}>
                <ConstTitle>
                    chaeeun && Mina
                </ConstTitle>
                <ContentSubTitle>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.
                </ContentSubTitle>


            </HomeSectionForm>
        </>
    )
}


export default ThirdSectionForm