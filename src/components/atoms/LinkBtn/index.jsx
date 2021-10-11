import React from "react"
import styled from "styled-components"


const WordWrapper = styled.p`
    font-size: 18px;
  margin: 0;
  color: #2B3044;
`
const LinkSvg = styled.svg`
 width: 76px;
  height: 40px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 7px) translateZ(0);
  fill: none;
  stroke:  #BBC1E1;
  stroke-linecap: round;
  stroke-width: 2px;
  stroke-dasharray:  69px 278px;
  stroke-dashoffset: 361px;
  transition: stroke .25s ease  0s, stroke-dasharray .35s;
`


const LinkTo = styled.a`
    display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  margin: 0  2px;
  transition: margin .25s;

  &:hover {
    margin: 0 4px;
  }

  &:hover ${LinkSvg} {
    stroke: #275EFE;
    stroke-dasharray:180px 278px;
    transition: stroke .25s ease  .1s, stroke-dasharray .35s;
  
  }
`



const LinkBtn = ({ linkName, linkHref }) => {

    return (
        <>
            <WordWrapper>Go to
                <LinkTo href={linkHref}>{linkName} link
                    <LinkSvg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                    </LinkSvg>

                </LinkTo>
                here
            </WordWrapper>
        </>
    )

}


export default LinkBtn;