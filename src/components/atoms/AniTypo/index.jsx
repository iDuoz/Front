import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"


const AniTypoWrapper = styled.div`
font-family : ${props => (props.fontFamily) || 'Jalnan'};
font-size : ${props => (props.size) || '4rem'};
cursor :default;
@media (max-width: 500px) {
font-size : 3.5rem;
}
@media (max-width: 400px) {
font-size : 3rem;
}
@media (max-width: 350px) {
font-size : 2.5rem;
}
`

const AniTypoText = styled.span`
  color: #edeff2;
  display: inline-block;
  position: relative;
  ${props => props.inview ? `
    &:before{
      animation:max-height 0.4s cubic-bezier(0.61, 1, 0.88, 1) 1 normal both;
      color: ${(props.mainTypo === true) ? '#b867e7' : '#e77f67'};
      // color: #e77f67;
      content: attr(data-text);
      left: 0;
      overflow: hidden;
      position: absolute;
      speak: none;
      @media (prefers-reduced-motion) {
        animation: none;
        content: '';
      };
      animation-delay :${(props.delay) ? `${props.delay}s` : null};
    
      };

    &:after{
        animation: max-width 0.7s cubic-bezier(0.61, 1, 0.88, 1) 1 normal both;
       
      color: ${(props.mainTypo === true) ? '#ff4d4f' : '#303952'} ;
      content: attr(data-text);
      left: 0;
      overflow: hidden;
      position: absolute;
      speak: none;
      animation-delay :${(props.delay) ? `${props.delay}s` : null};
    
      @media (prefers-reduced-motion) {
        animation: none;
        content: '';
      }
    
    };
  `: null};


@media (prefers-reduced-motion) {
    color: #303952;
  };

  @-webkit-keyframes max-width {
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
}

@keyframes max-width {
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
}
@-webkit-keyframes max-height {
  from {
    max-height: 0;
  }
  to {
    max-height: 100%;
  }
}
@keyframes max-height {
  from {
    max-height: 0;
  }
  to {
    max-height: 100%;
  }
}
`





const AniTypo = ({ typo, fontFamily, size, mainTypos }) => {


  const [ref, inView] = useInView();

  return (
    <>
      <AniTypoWrapper ref={ref} typo={typo} fontFamily={fontFamily} size={size}>
        {
          typo.map((typos, index) => {

            return (
              <AniTypoText key={index} mainTypo={mainTypos.includes(index)} inview={inView} data-text={typos} delay={(index + 1) * 0.2} >{typos}&nbsp;</AniTypoText>
            )
          })
        }
      </AniTypoWrapper>
    </>
  )
}


export default AniTypo