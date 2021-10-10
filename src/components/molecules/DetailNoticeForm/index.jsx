import React from "react"
import { Col, Row } from "../../../layout/"
import { Icon, Img, Typo } from "../../"

import merit_active_color from "../../../assets/icons/merit_active_color.png"
import merit_animal_color from "../../../assets/icons/merit_animal_color.png"
import merit_disaster_color from "../../../assets/icons/merit_disaster_color.png"
import merit_farming_color from "../../../assets/icons/merit_farming_color.png"
import merit_online_color from "../../../assets/icons/merit_online_color.png"



const DetailNoticeForm = ({ merit, online, region, age }) => {

    return (
        <>
            <Row align={'center'} justify={'center'}>
                {
                    (online === true) ?
                        <>
                            <Col span={3} align={'center'} justify={'center'} style={{ marginTop: "1rem" }}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'}>
                                    <Img src={merit_online_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col span={3} align={'center'} justify={'center'}>
                                {(merit === 'active') ?
                                    (<Icon direction={'column'} size={'7rem'} justIcon value={'활동적인'} >
                                        <Img src={merit_active_color} width={'5rem'}></Img>
                                    </Icon>)
                                    : (merit === "animal") ?
                                        (
                                            <Icon direction={'column'} size={'7rem'} justIcon value={'동물조아'}>
                                                <Img src={merit_animal_color} width={'5rem'}></Img>
                                            </Icon>
                                        ) : (merit === "disaster") ?
                                            (
                                                <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                    <Img src={merit_disaster_color} width={'5rem'}></Img>
                                                </Icon>
                                            ) : (merit === "farming") ?
                                                (
                                                    <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                        <Img src={merit_farming_color} width={'5rem'}></Img>
                                                    </Icon>
                                                ) : null}


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
                                                    <Col key={index} span={12} align={'center'} justify={'center'}>
                                                        {
                                                            lists === "teen" ?
                                                                <Typo key={index} size={'1.5rem'}>미성년자</Typo>
                                                                :
                                                                <Typo key={index} size={'1.5rem'}>성인</Typo>
                                                        }

                                                    </Col>
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
                                    (merit === 'active') ?
                                        (<Icon direction={'column'} size={'7rem'} justIcon value={'활동적인'} >
                                            <Img src={merit_active_color} width={'5rem'}></Img>
                                        </Icon>)
                                        : (merit === "animal") ?
                                            (
                                                <Icon direction={'column'} size={'7rem'} justIcon value={'동물조아'}>
                                                    <Img src={merit_animal_color} width={'5rem'}></Img>
                                                </Icon>
                                            ) : (merit === "disaster") ?
                                                (
                                                    <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                        <Img src={merit_disaster_color} width={'5rem'}></Img>
                                                    </Icon>
                                                ) : (merit === "farming") ?
                                                    (
                                                        <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                                            <Img src={merit_farming_color} width={'5rem'}></Img>
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
                                                    <Col key={index} span={12} align={'center'} justify={'center'} style={{ margin: '5px 0' }}>
                                                        {
                                                            lists === "teen" ?
                                                                <Typo key={index} size={'1.7rem'}>미성년자</Typo>
                                                                :
                                                                <Typo key={index} size={'1.7rem'}>성인</Typo>
                                                        }

                                                    </Col>
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