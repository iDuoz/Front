import React from "react"
import styled from "styled-components"

const IframeWrapper = styled.iframe.attrs((props) => ({
    src: props.src,
}))`
    height: ${props => props.height || `40rem`};
    width: 100%;
    border: none;
    margin-top: 2rem;
    margin-bottom: 3rem;
  `;




const IframeBox = ({ src, height }) => {
    return (
        <>
            <IframeWrapper height={height} src={src}></IframeWrapper>
        </>
    )
}

export default IframeBox