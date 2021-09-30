import React from "react"
import styled from "styled-components"


const HighLightWrapper = styled.span`
    position: relative;
    font-size: ${props => (props.fontSize || `1rem`)};

::before{
    transform: scaleX(0);
    transform-origin: bottom right;
    content: " ";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    inset: 0 0 0 0;
    background: ${props => (props.highLightColor || `hsl(200 100% 80%)`)} ;
    color: ${props => (props.fontColor)} ;

    z-index: -1;
    transition: transform .3s ease;
}
&:hover::before{
    transform: scaleX(1);
    transform-origin: bottom left

}
 `


/**
 * 
 * @param ontSize -크기
 * @param fontColor -글씨 색깔
 * @param highLightColor -강조할색깔
 */


const TypoHighlight = ({ fontSize, fontColor, highLightColor, children }) => (

    <HighLightWrapper fontSize={fontSize} fontColor={fontColor} highLightColor={highLightColor}>
        {children}
    </HighLightWrapper>

)


export default TypoHighlight;