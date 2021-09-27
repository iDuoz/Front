import React from 'react';
import FirstSectionForm from '../SectionFrom/firstSectionForm';
import SecondSectionForm from '../SectionFrom/secondSectionForm';
import ThirdSectionForm from '../SectionFrom/thirdSectionForm';

const HomeContent = ({ testRef, parallaxScroll, currentSlider, sectionScrollType }) => {


    return (
        <>
            {/* SECTION Content */}
            <div ref={testRef} onWheel={parallaxScroll} >
                <FirstSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[0]}></FirstSectionForm>
                <SecondSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[1]}></SecondSectionForm>
                <ThirdSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[2]}></ThirdSectionForm>
            </div>


            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;