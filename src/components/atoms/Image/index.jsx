import React, { memo } from "react"
import styled from "styled-components"

const ImageStyle = styled.img.attrs((props) => ({
    transition: `all 0.5s ease`,
    src: props.src
}))`
    transition: all 0.5s ease  ;
    ${(props) => (props.circle) ? ` border-radius : 50%; ` : null}
    height :  ${props => props.height || null} ;
    ${(props) => (props.cursor) ? ` cursor : ${props.cursor}` : null}
    width : ${props => props.width};
    ${(props) => (props.circle) ? ` border-radius : 100%; ` : null}
    border : ${props => (props.border) || null};
`

const Image = ({ src, width, circle, height, cursor, border }) => (
    <>
        <ImageStyle src={src} width={width} cursor={cursor} border={border}
            height={height} circle={circle} ></ImageStyle>
    </>
)

export default memo(Image)

