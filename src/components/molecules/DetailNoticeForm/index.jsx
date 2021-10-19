import React from "react"
import { Col, Row } from "../../../layout/"
import { Icon, Img, Typo } from "../../"

import merit_education_color from "../../../assets/icons/merit_education_color.png"
import merit_cooking_color from "../../../assets/icons/merit_cooking_color.png"
import merit_disaster_color from "../../../assets/icons/merit_disaster_color.png"
import merit_eco_color from "../../../assets/icons/merit_eco_color.png"
import merit_online_color from "../../../assets/icons/merit_online_color.png"
import merit_government_color from "../../../assets/icons/merit_government_color.png"


const DetailNoticeForm = ({ merit, online, region, age }) => {

    return (
        <>
            <Row align={'center'} justify={'center'}>
                {
                    (online === true && merit) ?
                        <>
                            <Col span={3} align={'center'} justify={'center'} style={{ marginTop: "1rem" }}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'}>
                                    <Img src={merit_online_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col span={3} align={'center'} justify={'center'}>
                                {(merit === 'education') ?
                                    (<Icon direction={'column'} size={'7rem'} justIcon value={'교육관련'} >
                                        <Img src={merit_education_color} width={'5rem'}></Img>
                                    </Icon>)
                                    : (merit === "cooking") ?
                                        (
                                            <Icon direction={'column'} size={'7rem'} justIcon value={'요리조아'}>
                                                <Img src={merit_cooking_color} width={'5rem'}></Img>
                                            </Icon>
                                        ) : (merit === "disaster") ?
                                            (
                                                <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                    <Img src={merit_disaster_color} width={'5rem'}></Img>
                                                </Icon>
                                            ) : (merit === "eco") ?
                                                (
                                                    <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'}>
                                                        <Img src={merit_eco_color} width={'5rem'}></Img>
                                                    </Icon>
                                                ) : (merit === "government") ?
                                                    (
                                                        <Icon direction={'column'} size={'7rem'} justIcon value={'일반행정'}>
                                                            <Img src={merit_government_color} width={'5rem'}></Img>
                                                        </Icon>
                                                    ) : null

                                }


                            </Col>
                            <Col span={3} align={'center'} justify={'center'}>
                                <Typo size={'1.7rem'}>{region}</Typo>
                            </Col>
                            <Col span={3} align={'center'} justify={'center'}>
                                <Row align={'center'} justify={'center'}>
                                    {
                                        age.map((lists, index) => {
                                            return (
                                                <>
                                                    <React.Fragment key={index}>
                                                        <Col key={index} span={12} align={'center'} justify={'center'}>
                                                            {
                                                                lists === "teen" ?
                                                                    <Typo key={index} size={'1.5rem'}>미성년자</Typo>
                                                                    :
                                                                    <Typo key={index} size={'1.5rem'}>성인</Typo>
                                                            }
                                                        </Col>
                                                    </React.Fragment>
                                                </>
                                            )
                                        })
                                    }
                                </Row>
                            </Col></>
                        :
                        <>
                            <Col span={4} align={'center'} justify={'center'} style={{ marginTop: "1rem" }}>
                                {
                                    (merit === 'education') ?
                                        (<Icon direction={'column'} size={'7rem'} justIcon value={'교육관련'} >
                                            <Img src={merit_education_color} width={'5rem'}></Img>
                                        </Icon>)
                                        : (merit === "cooking") ?
                                            (
                                                <Icon direction={'column'} size={'7rem'} justIcon value={'요리조아'}>
                                                    <Img src={merit_cooking_color} width={'5rem'}></Img>
                                                </Icon>
                                            ) : (merit === "disaster") ?
                                                (
                                                    <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                        <Img src={merit_disaster_color} width={'5rem'}></Img>
                                                    </Icon>
                                                ) : (merit === "eco") ?
                                                    (
                                                        <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'}>
                                                            <Img src={merit_eco_color} width={'5rem'}></Img>
                                                        </Icon>
                                                    ) : (merit === "government") ?
                                                        (
                                                            <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'}>
                                                                <Img src={merit_government_color} width={'5rem'}></Img>
                                                            </Icon>
                                                        ) : (online) ?
                                                            (
                                                                <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'}>
                                                                    <Img src={merit_online_color} width={'5rem'}></Img>
                                                                </Icon>
                                                            ) : null
                                }
                            </Col>
                            <Col span={4} align={'center'} justify={'center'}>
                                <Typo size={'1.9rem'}>{region}</Typo>
                            </Col>
                            <Col span={4} align={'center'} justify={'center'}>
                                <Row align={'center'} justify={'center'}>
                                    {
                                        age.map((lists, index) => {
                                            return (
                                                <>
                                                    <React.Fragment key={index}>
                                                        <Col key={index} span={12} align={'center'} justify={'center'} style={{ margin: '5px 0' }}>
                                                            {
                                                                lists === "teen" ?
                                                                    <Typo key={index} size={'1.7rem'}>미성년자</Typo>
                                                                    :
                                                                    <Typo key={index} size={'1.7rem'}>성인</Typo>
                                                            }

                                                        </Col>
                                                    </React.Fragment>
                                                </>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </>
                }

            </Row>
        </>
    )


}

export default DetailNoticeForm