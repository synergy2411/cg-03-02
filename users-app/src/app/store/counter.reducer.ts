import { Action } from '@ngrx/store'
import * as fromActions from './counter.action';

export interface CounterType {
    counter : number;
}

const intitailState = {
    counter : 0
}
export function counterReducer(
    state : CounterType = intitailState , 
    action : fromActions.CounterActions) {

    switch (action.type) {
        case fromActions.INCREMENT: return {
            counter : state.counter + 1
        }
        case fromActions.DECREMENT: return {
            counter : state.counter - 1
        }
        case fromActions.ADD_NUMBER: return {
            counter : state.counter + action.payload
        }
        case fromActions.SUBSTRACT_NUMBER: return {
            counter : state.counter - action.payload
        }
        default:
            return state;
    }

    return state;
}