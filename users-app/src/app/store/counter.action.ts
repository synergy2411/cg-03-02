import { Action } from '@ngrx/store';

export const INIT = "INIT";
export const INCREMENT = "INCRMENT";
export const DECREMENT = "DECRMENT";
export const ADD_NUMBER = "ADD_NUMBER";
export const SUBSTRACT_NUMBER = "SUBSTRACT_NUMBER";

// Action Creators
export class Init implements Action{
    readonly type = INIT;
}

export class Increment implements Action{
    readonly type = INCREMENT;
}

export class Decrement implements Action{
    readonly type = DECREMENT;
}

export class AddNumber implements Action{
    readonly type = ADD_NUMBER;
    constructor(public payload : number){}
}


export class SubtractNumber implements Action{
    readonly type = SUBSTRACT_NUMBER;
    constructor(public payload : number){}
}

export type CounterActions = Increment | Decrement | AddNumber | SubtractNumber;