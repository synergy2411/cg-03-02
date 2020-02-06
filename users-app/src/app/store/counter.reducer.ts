import { Action } from '@ngrx/store'

export interface CounterType {
    counter : number;
}

const intitailState = {
    counter : 0
}
export const counterReducer = (
    state : CounterType = intitailState , 
    action : Action) => {

    switch (action.type) {
        case "INCREMENT": return {
            counter : state.counter + 1
        }
        case "DECREMENT": return {
            counter : state.counter - 1
        }
        case "ADD_NUMBER": return {
            // counter : state.counter + action.value
        }
        case "SUBSTRACT_NUMBER": return {
            // counter : state.counter - action.value
        }
        default:
            return state;
    }

    return state;
}