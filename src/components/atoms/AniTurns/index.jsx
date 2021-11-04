import React from "react"
import styled from "styled-components"

const SettingTrans = styled.div`
    transform: translateY(20px);
    transition: 0.2s ease-in-out;
    opacity: 0;
    width : 100%;
`

const TransSection = styled(SettingTrans)`
display : flex;
justify-content : ${props => props.justify || 'center'};
align-items :${props => props.align || 'center'} ;
height : ${props => props.height || 'inherit'} ;
background-color : ${props => props.backgroundColor};

${props => props.inview ?
        `
    transition-delay : ${props.Index * 0.2}s;
    transform: translateY(0px);
    opacity: 1;
`
        : null};

`








const AniTurns = (inView, Index, justify, align, height, backgroundColor, children) => {

    return (
        <>
            <TransSection inview={inView} Index={Index} height={height} backgroundColor={backgroundColor} align={align} justify={justify}>
                {children}
            </TransSection>
        </>
    )

}

export default AniTurns;