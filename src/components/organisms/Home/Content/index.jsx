
import React, { useState } from 'react';
import FirstSectionForm from '../SectionFrom/firstSectionForm';
import SecondSectionForm from '../SectionFrom/secondSectionForm';
import ThirdSectionForm from '../SectionFrom/thirdSectionForm';

const HomeContent = ({ testRef, parallaxScroll, currentSlider, sectionScrollType, settingMobileBtn }) => {

    const [check, setCheck] = useState(null)
    const [checkout, setCheckout] = useState(null)

    const handelDragEnter = (e) => {
        console.log(e)
        setCheck(e.clientY)
    }
    const handelDragDrop = (e) => {
        console.log(e.clientY)
        setCheckout(e.clientY)
    }

    return (
        <>
            {/* SECTION Content */}

            <div ref={testRef} onWheel={parallaxScroll} onDragEnd={handelDragDrop} onDragStart={handelDragEnter} style={{
                position: 'relative', height: '100%', width: "100%", zIndex: '1000'
            }}>
                {
                    (check > 0) ?
                        <div style={{ position: 'relative', width: "20px", height: '20px', left: '30%', top: '50%', zIndex: "11" }}>
                            {check}'    '{checkout}</div> : null
                }
                <FirstSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[0]} settingMobileBtn={settingMobileBtn} ></FirstSectionForm>
                <SecondSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[1]} settingMobileBtn={settingMobileBtn}></SecondSectionForm>
                <ThirdSectionForm currentSlider={currentSlider} sectionScrollType={sectionScrollType[2]} settingMobileBtn={settingMobileBtn}></ThirdSectionForm>
            </div>


            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;