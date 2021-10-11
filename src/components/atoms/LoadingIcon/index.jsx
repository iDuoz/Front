import React from 'react'
import styled from "styled-components"


const Container = styled.div`
display:block;
width: 100%; height:100%;
position: absolute;
z-index: 100;
background: rgba(60,74,92,0.08);
opacity: 1;
display: flex;
justify-content:center;
align-items: center;
transition: opacity 1s cubic-bezier(.83,.01,.75,.71);

`
const AnimationHolder = styled.div`
width: 100px; height:100px;
transform:rotate(45deg);
position: relative;
`
const LoadingAnimator = styled.div`
width: 50px; height:50px;
    float:left;
    background: #368a79;
    transform:rotate(0deg);
    position:relative;
    top:0px; left:0px;
    bottom:0px; right:0px;
    opacity: 1;
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.46,-0.1,.2,1.5);
    @keyframes loading {
        0%{
            transform:rotate(0deg);
            opacity: 1;
        }
        25%{
            transform:rotate(90deg);
            opacity: 0;
        }
        35%{
            transform:rotate(-90deg);
            opacity:0;
        }
        65%{
            transform:rotate(0deg);
            opacity: 1;
        }
    }
    `

const FirstLoadingAnimator = styled(LoadingAnimator)`
background: #9baacf;
transform-origin: bottom right;
`
const SecondLoadingAnimator = styled(LoadingAnimator)`
background: #bec8e4;
transform-origin: bottom left;
    animation-delay:0.3s;;
`
const ThirdLoadingAnimator = styled(LoadingAnimator)`
background: #c8d0e7;
transform-origin: top right;
    animation-delay:0.5s;

`
const FourthLoadingAnimator = styled(LoadingAnimator)`
background: #E4EBF5;
transform-origin: top left;
    animation-delay:0.4s;
`

const MiddleCircle = styled.div`
      width: 5px; height: 5px;
        position: absolute;
        top:47.5px; left:47.5px;
        border-radius: 100%;
        border:1px solid #8abdff;
        background: #3c4a5c;
    `

const LoadingIcon = () => {
    return (
        <>
            <Container>
                <AnimationHolder>
                    <FirstLoadingAnimator />
                    <SecondLoadingAnimator />
                    <ThirdLoadingAnimator />
                    <FourthLoadingAnimator />
                    <MiddleCircle />
                </AnimationHolder>

            </Container>

        </>
    )
}

export default LoadingIcon
