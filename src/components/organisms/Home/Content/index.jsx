
import React from 'react';
import FirstSectionForm from '../SectionFrom/firstSectionForm';
import SecondSectionForm from '../SectionFrom/secondSectionForm';
import ThirdSectionForm from '../SectionFrom/thirdSectionForm';
import { HomeSectionForm } from '../../..';


const HomeContent = ({ testRef, parallaxScroll, currentSlider, sectionScrollType, settingMobileBtn,
    handleTouchStart, handleTouchEnd }) => {

    return (
        <>
            {/* SECTION Content */}

            <div ref={testRef} onWheel={parallaxScroll} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{
                position: 'relative', height: '100%', width: "100%"
            }}>
                <HomeSectionForm backGroundColor={'#edeff2'} pageIndex={0} currentSlider={currentSlider} sectionScrollType={sectionScrollType[0]}>
                    <FirstSectionForm  ></FirstSectionForm>
                </HomeSectionForm>

                <HomeSectionForm backGroundColor={'#edeff2'} pageIndex={1} currentSlider={currentSlider} sectionScrollType={sectionScrollType[1]}>
                    <SecondSectionForm   ></SecondSectionForm>
                </HomeSectionForm>

                <HomeSectionForm backGroundColor={'#edeff2'} pageIndex={2} currentSlider={currentSlider} sectionScrollType={sectionScrollType[2]}>
                    <ThirdSectionForm  ></ThirdSectionForm>
                </HomeSectionForm>
            </div>


            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;