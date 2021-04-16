import store from '../index'
import { ADD, JIAN, ASYNCADD } from '../actionTypes'

// actions
export const add = (number: number) => {
    store.dispatch({type: ADD, payload: number})
}
export const jian = (number: number) => {
    store.dispatch({type: JIAN, payload: number})
}
export const asyncAdd = () => {
    // 异步
    const asyncFun = new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 1000);
    })
    asyncFun.then(res => {
        store.dispatch({type: ASYNCADD, payload: res})
    })
}
