import React, {FC} from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
    const { test } = state
    return {
        count: test.count
    }
}

interface IProps {
    count: number
}

const Com2: FC<IProps> = ({count}) => {
    return (
        <div>
            子组件2：{count}
        </div>
    )
}

export default connect(mapStateToProps, {})(Com2);