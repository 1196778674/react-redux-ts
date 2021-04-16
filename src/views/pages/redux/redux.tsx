import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { Button, Typography, Space } from 'antd';
import styled from 'styled-components';
import Com1 from './child1'
import Com2 from './com2'
import File from './file'
import { add, jian, asyncAdd } from '../../../store/actions';

const { Title } = Typography;

export const TitleStyle = styled.div`
  
`;


const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: Function) => ({
    add: (number: number) => add(number),
    jian: (number: number) => jian(number),
    asyncAdd: () => asyncAdd()
})

interface IProps {
    count: number
    add: Function
    jian: Function
    asyncAdd: Function
}


const Redux: React.FC<IProps> = ({ add ,jian, asyncAdd}) => {
    const adds = useCallback(() => {
        add(1)
    },[add])
    const jians = useCallback(() => {
        jian(2)
    },[jian])
    const asyncAddFun = useCallback(() => {
        asyncAdd()
    }, [asyncAdd])

    return (
        <>
            <File/>
            <Title level={3}>这是一个Dome</Title>
            <Com1/>
            <Com2/>
            <Space>
                <Button onClick={adds}>同步加1</Button>
                <Button onClick={jians}>同步减2</Button>
                <Button onClick={asyncAddFun}>异步加3(1s后)</Button>
            </Space>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)