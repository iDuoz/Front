const wheelEvent = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
        console.log('scroll up');
        // setScrollType("upScroll")
    } else {
        console.log('scroll down');
        // setScrollType("downScroll")
    }
}

export default wheelEvent;