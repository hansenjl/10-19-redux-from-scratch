let addQuarter = document.getElementById("add-quarter");
let addDime = document.getElementById("add-dime");
let addNickel = document.getElementById("add-nickel");
let addPenny = document.getElementById("add-penny");
let total = document.getElementById("total");

addQuarter.addEventListener('click', () => {
    counter.dispatch({type: "ADD", payload: 25})
    total.innerText = counter.state()
})

addPenny.addEventListener('click', () => {
    counter.dispatch({type: "ADD", payload: 1})
    total.innerText = counter.state()
})


addNickel.addEventListener('click', () => {
    counter.dispatch({type: "ADD", payload: 5})
    total.innerText = counter.state()
})

addDime.addEventListener('click', () => {
    counter.dispatch({type: "ADD", payload: 10})
    total.innerText = counter.state()
})


// THIS IS A PURE FUNCTION
function countReducer(state = 0, action){
    switch(action.type){
        case "ADD":
            return state + action.payload
        case "SUBTRACT":
            return state - action.payload
        default:
            return state
    }  
}

function createStore(reducer){
    // we will keep track of state 
    let state 
    // we will have the ability to update state
    return {
        state: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
            return state 
        }
    }
}

let counter = createStore(countReducer)
counter.dispatch({type: "INIT"})