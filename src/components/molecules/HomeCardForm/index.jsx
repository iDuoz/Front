import React from "react"
import styled from "styled-components"
import Typo from "../../atoms/Typography"


const Box = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
width: 18rem;
height: 18em;
padding: 1em;
box-sizing: border-box;
border-radius: 4px;
transition: all 0.25s ease 0.2s;
&:hover{
    background : #edeff273;
    box-shadow: rgb(199 199 199) 0.3em 0.3em 0.6em, rgb(255 255 255) -0.2em -0.2em 0.5em;
}
&:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #d3d7e6, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
}
`

const Img = styled.img.attrs((props) => ({
    transition: `all 0.5s ease`,
    src: props.src
}))`
    transition: all 0.5s ease  ;
    ${(props) => (props.cursor) ? ` cursor : ${props.cursor}` : null};
    width : ${props => props.width};
    object-fit: cover;
    margin-bottom : 10px;
`




const HomeCardForm = ({ onClick, imgSrc, width, typoValue, children }) => {


    return (
        <Box onClick={onClick} >
            <>
                <Img src={imgSrc} width={width}></Img>
                {children}
                <Typo size={"1.4rem"} color={"#4d4d4d"}>{typoValue}</Typo>
            </>

        </Box>

    )

}

export default HomeCardForm;