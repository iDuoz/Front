import React from 'react';
import FirstSectionForm from '../SectionFrom/firstSectionForm';
import SecondSectionForm from '../SectionFrom/secondSectionForm';
import ThirdSectionForm from '../SectionFrom/thirdSectionForm';

const HomeContent = ({ testRef, parallaxScroll, currentSlider, sectionScrollType, settingStartDrag, settingEndDrag }) => {


    return (
        <>
            {/* SECTION Content */}
            <div ref={testRef} onWheel={parallaxScroll} onClick={settingStartDrag}
                onDragStart={settingEndDrag}  >
                <FirstSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[0]} ></FirstSectionForm>
                <SecondSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[1]} ></SecondSectionForm>
                <ThirdSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[2]}></ThirdSectionForm>
            </div>


            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;