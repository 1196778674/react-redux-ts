import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { Button, Typography } from 'antd';
import styled from 'styled-components';
import Com1 from './child1'
import Com2 from './child2'

const { Title } = Typography;

export const TitleStyle = styled.div`
  
`;


const mapStateToProps = (state: any) => {}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        add: (number: number) => {
            dispatch({type: 'increment', payload: number})
        },
        jian: (number: number) => {
            dispatch({type: 'decrement', payload: number})
        }
    }
}

interface IProps {
    count: number
    add: Function
    jian: Function
}


const Redux: React.FC<IProps> = ({ add ,jian}) => {
    const adds = useCallback(() => {
        add(1)
    },[add])
    const jians = useCallback(() => {
        jian(2)
    },[jian])

    return (
        <>
            <Title level={3}>这是一个Dome</Title>
            <Com1/>
            <Com2/>
            <Button onClick={adds}>+</Button>
            <Button onClick={jians}>-</Button>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)