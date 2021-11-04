import React from 'react'
import styled from 'styled-components'



const Typo = styled.div`
display : inline-block;
transition: all 0.5s ease  ;
${props => (props.full) ? 'width : 100%; justify-content : inherit; flex-basis :100%' : null};
overflow : auto;
font-size : ${props => (props.size) || '1rem'};
font-family : ${props => (props.fontFamily) || 'Noto Sans KR'};
color : ${props => (props.color)};
background-color : ${props => (props.backColor)};
opacity :  ${props => (props.opacity)};
font-weight : ${props => (props.weight)};
${props => (props.radius) ? `border-radius: 5px;` : null};
border-bottom : ${props => (props.border) || null};
cursor : ${props => (props.cursor) || 'default'};
padding : ${props => (props.padding)};
width : ${props => (props.width) || null};
`




const Typography = ({ size, color, onClick, radius, fontFamily, full, width,
    backColor, children, opacity, weight, cursor, border, padding }) => {
    return (
        <>
            <Typo size={size} color={color} onClick={onClick} fontFamily={fontFamily} width={width}
                radius={radius} backColor={backColor} weight={weight} full={full}
                children={children} opacity={opacity} cursor={cursor} border={border} padding={padding}>
            </Typo>
        </>
    )
}

export default Typography;