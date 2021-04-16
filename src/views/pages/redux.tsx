import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd';

const mapStateToProps = (state: any) => {
    const { test } = state
    return {
        count: test.count
    }
}

const mapDispatchToProps = (dispatch: any) => {
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


const Redux: React.FC<IProps> = ({count, add ,jian}) => {
    const adds = useCallback(() => {
        add(1)
    },[add])
    const jians = useCallback(() => {
        jian(2)
    },[jian])

    return (
        <>
            {count}
            <Button onClick={adds}>+</Button>
            <Button onClick={jians}>-</Button>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)