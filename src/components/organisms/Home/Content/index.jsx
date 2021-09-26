import React, { useState, useRef } from 'react';




const HomeContent = () => {

    const testRef = useRef()
    // console.log(testRef)
    // console.log(testRef.current)
    // console.log(testRef.current.childElementCount)
    // const [pageNum, setPageNum] = useState(0)
    // setPageNum(testRef.current.childElementCount)
    // setPageNum(testRef)
    console.log(testRef)
    console.log(testRef)
    return (
        <>
            {/* SECTION Content */}
            <div ref={testRef}>
                <div >a</div>
                <div>b</div>
                <div>c</div>
            </div>
            {
                console.log(testRef)
            }

            {/* !SECTION Content */}
        </>
    )
}


export default HomeContent;