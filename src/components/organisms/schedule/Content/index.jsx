import { Badge, Calendar } from 'antd';
import React from 'react'
import { Row, Col, ContentStyle } from '../../../../layout'
import { Typo, Image, Button } from "../../.."
import styled from 'styled-components'

const getOctListData = (value) => {
    let listData;
    switch (value.date()) {
        case 3:
            listData = [

                {
                    type: 'success',
                    content: '손목재활운동',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'warning',
                    content: '하체재활운동',
                }
            ];
            break;
        default:
    }
    return listData || [];
};

const getListData = (value) => {
    let listData;
    switch (value.date()) {

        case 2:
            listData = [

                {
                    type: 'success',
                    content: '손목재활운동',
                },
            ];
            break;
        case 8:
            listData = [

                {
                    type: 'success',
                    content: '손목재활운동',
                },
            ];
            break;
        case 29:
            listData = [
                {
                    type: 'warning',
                    content: '상체재활운동',
                }
            ];
            break;

        default:
    }
    return listData || [];
};
const getMonthData = (value) => {

    if (value.month() === 8) {
        return 1394;
    }
};

const ScheduleContent = () => {


    const monthCellRender = (value) => {
        console.log(value)
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month" >
                <section>{num}</section>
                <span>Backlog number</span>
            </div >
        ) : null;
    };
    const dateCellRender = (value) => {

        const listData = (value.month() === 10) ? getListData(value) :
            (value.month() === 9) ? getOctListData(value) : [];
        return (
            <ul className="events" style={{
                backgroundColor: "#468aff33"
            }}>
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <>
            <ContentStyle>
                <Row justify={"space-between"}>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>운동 일정</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 재활운동 일정을 확인 및 계획합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ marginTop: "3rem" }}>
                        <Calendar style={{ backgroundColor: "#9ba8ff39" }} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />

                    </Col>
                </Row>
            </ContentStyle>
        </>
    )
}


export default ScheduleContent