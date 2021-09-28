import React from 'react';
import FirstSectionForm from '../SectionFrom/firstSectionForm';
import SecondSectionForm from '../SectionFrom/secondSectionForm';
import ThirdSectionForm from '../SectionFrom/thirdSectionForm';

const HomeContent = ({ testRef, parallaxScroll, currentSlider, sectionScrollType, settingMobileBtn }) => {


    return (
        <>
            {/* SECTION Content */}
            <div ref={testRef} onWheel={parallaxScroll} style={{ position: 'absolute' }}>
                <FirstSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[0]} settingMobileBtn={settingMobileBtn} ></FirstSectionForm>
                <SecondSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[1]} settingMobileBtn={settingMobileBtn}></SecondSectionForm>
                <ThirdSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[2]} settingMobileBtn={settingMobileBtn}></ThirdSectionForm>
            </div>


            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;