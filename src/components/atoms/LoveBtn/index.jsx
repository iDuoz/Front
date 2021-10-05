import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`


const Heart = styled.div`
   width: 100px;
    height: 100px;
    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    ${props => props.click ? `
      transition-duration: 1s;
  background-position: -2800px 0;
    `
        : null
    }
`

/**
 * @param isHeart true false
 * @param handleIsHeart handleTrueFalse
 */
const LoveBtn = ({ isHeart, handleIsHeart }) => {

    // const [isHeart, SetIsHeart] = useState(heart)

    // const handleIsHeart = () => {
    //     (isHeart ? SetIsHeart(false) : SetIsHeart(true))
    // }

    return (
        <Wrapper onClick={handleIsHeart}>
            <Heart click={isHeart} ></Heart>
        </Wrapper>
    )


}

export default LoveBtn;