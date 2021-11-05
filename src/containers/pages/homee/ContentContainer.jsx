import React, { memo, useState, useRef, useEffect } from 'react';
import HomeContent from "../../../components/organisms/homeeee/Content"




const ContentContainer = () => {

    const testRef = useRef()
    const scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
    //트랙패드 제스처에 대한 민감도를 변경하려면 이 숫자를 늘리거나 줄입니다(위 = 덜 민감, 아래 = 더 민감)
    const slideDurationSetting = 600; //Amount of time for which slide is "locked"
    //슬라이드가 "잠기는" 시간

    const [isTicking, setIsTricking] = useState(false)
    const [currentSlider, setCurrentSlider] = useState(0)
    const [totalSLideNumber, setTotalSLideNumber] = useState()
    //section 별 scrollType
    const [sectionScrollType, setSectionScrollType] = useState({})


    const [pageScroll, setPageScroll] = useState({ type: "" })



    console.log("sectionScrollType")
    console.log(sectionScrollType)



    const parallaxScroll = (e) => {
        let delta = e.nativeEvent.wheelDelta

        if (isTicking !== true) {
            if (delta <= -scrollSensitivitySetting) {
                //downScroll
                setIsTricking(true)
                if (currentSlider !== totalSLideNumber - 1) {
                    setCurrentSlider((state) => state + 1);
                    setPageScroll((state) => ({ ...state, type: "down" }));
                }
                slideDurationTimeout(slideDurationSetting);
            }
            if (delta >= scrollSensitivitySetting) {
                setIsTricking(true);
                if (currentSlider !== 0) {
                    setCurrentSlider(state => state - 1);
                    setPageScroll((state) => ({ ...state, type: "up" }));
                }
                slideDurationTimeout(slideDurationSetting);
            }
        }
    }
    const slideDurationTimeout = (slideDuration) => {
        setTimeout(() => {
            setIsTricking(false);
        }, slideDuration);
    }
    useEffect(() => {
        console.log("currentSlider")
        console.log(currentSlider)
        console.log(pageScroll.type)
        if (pageScroll.type === "down") {
            setSectionScrollType((state) => ({ ...state, [currentSlider - 1]: "down-scroll" }))
        } else {
            setSectionScrollType((state) => ({ ...state, [currentSlider]: "up-scroll" }))
        }
    }, [currentSlider, pageScroll])

    useEffect(() => {
        console.log(testRef)
        console.log(testRef.current.children)
        setTotalSLideNumber(testRef.current.childElementCount)
    }, [])





    // const parallaxDrag = (e) => {
    //     console.log(e)
    //     console.log("ji")
    // }

    const settingMobileBtn = {
        pageUp: () => {
            setIsTricking(true);
            if (currentSlider !== 0) {
                setCurrentSlider(state => state - 1);
                setPageScroll((state) => ({ ...state, type: "up" }));
            }
            slideDurationTimeout(slideDurationSetting);
        },

        pageDown: () => {
            setIsTricking(true)
            if (currentSlider !== totalSLideNumber - 1) {
                setCurrentSlider((state) => state + 1);
                setPageScroll((state) => ({ ...state, type: "down" }));
            }
            slideDurationTimeout(slideDurationSetting);
        },


    }



    const [startY, SetStartY] = useState()

    const handleTouchStart = (e) => {
        console.log(e.changedTouches[0].pageY)
        SetStartY(e.changedTouches[0].pageY)
    }

    const handleTouchEnd = (e) => {
        console.log(e.changedTouches[0].pageY)
        console.log(startY - e.changedTouches[0].pageY > 50)
        console.log(startY - e.changedTouches[0].pageY < -50)
        if (startY - e.changedTouches[0].pageY > 50) {
            setIsTricking(true)
            if (currentSlider !== totalSLideNumber - 1) {
                setCurrentSlider((state) => state + 1);
                setPageScroll((state) => ({ ...state, type: "down" }));
            }
            slideDurationTimeout(slideDurationSetting);

        }
        // settingMobileBtn.pageUp
        else if (startY - e.changedTouches[0].pageY < -50) {
            setIsTricking(true);
            if (currentSlider !== 0) {
                setCurrentSlider(state => state - 1);
                setPageScroll((state) => ({ ...state, type: "up" }));
            }
            slideDurationTimeout(slideDurationSetting);
        }
    }



    return (
        <>
            <HomeContent
                testRef={testRef}
                parallaxScroll={parallaxScroll}
                currentSlider={currentSlider}
                sectionScrollType={sectionScrollType}
                // parallaxDrag={parallaxDrag}
                settingMobileBtn={settingMobileBtn}
                handleTouchStart={handleTouchStart}
                handleTouchEnd={handleTouchEnd}
            ></HomeContent>
        </>
    )
}


export default memo(ContentContainer)