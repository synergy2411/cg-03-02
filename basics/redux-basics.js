// npm init -y
// npm install --save redux

const { createStore } = require("redux");

// Reducer
const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === "ADD_NUMBER") {
        return {
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(counterReducer);

// console.log(store.getState());

// Subscribing the Store

store.subscribe(() => {
    console.log(store.getState());
})

// Action 
store.dispatch({ type: "INCREMENT" });

// console.log(store.getState());

store.dispatch({ type: "ADD_NUMBER", value: 20 });

// console.log(store.getState());

