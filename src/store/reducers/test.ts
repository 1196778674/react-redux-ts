import { initState } from '../actions'

interface IAction {
    type: string
    payload: number | string
}

const test = (state = initState, action: IAction) => {
    const { type, payload } = action
    switch (type){
        case "increment":
            return {
                count:state.count+Number(payload)
            }
        case "decrement":
            return {
                count:state.count-Number(payload)
            }
        default :
        return state 
    }
}

export default test