import React from "react"
import styled from "styled-components"

const IframeWrapper = styled.iframe.attrs((props) => ({
    src: props.src,
}))`
    min-height: 40rem;
    width: auto;
    border: none;
    margin-top: 2rem;
    margin-bottom: 3rem;
  `;




const IframeBox = ({ src }) => {
    return (
        <>
            <IframeWrapper src={src}></IframeWrapper>
        </>
    )
}

export default IframeBox