
import { ADD, JIAN, ASYNCADD } from '../actionTypes'

// states
export const initState = {
    count: 1
}

interface IAction {
    type: string
    payload: number | string
}

const test = (state = initState, action: IAction) => {
    const { type, payload } = action
    switch (type){
        case ADD:
            return {
                count:state.count+Number(payload)
            }
        case JIAN:
            return {
                count:state.count-Number(payload)
            }
        case ASYNCADD:
            return {
                count:state.count+Number(payload)
            }
        default :
        return state 
    }
}

export default test