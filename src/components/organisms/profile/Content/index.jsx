import React, { useState } from 'react'
import { Row, Col } from '../../../../layout'
import styled from "styled-components"

import userService from "../../../../service/firebase/database/getUserData"


const TestWrapper = styled.div`
    margin : 60px;
    
    width : 100%;
`


const ProfileContent = () => {


    return (
        <>
            <Row justify={'center'} align={'center'} style={{ backgroundColor: 'inherit' }}>
                <Col span={9}>
                    <TestWrapper onClick={userService.getUserData}> getMyProfile</TestWrapper>

                </Col>
            </Row>
        </>
    )
}

export default ProfileContent