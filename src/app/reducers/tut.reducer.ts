import { Action } from '@ngrx/store'
import { Tut } from './../models/tut.model'
import * as TutActions from './../actions/tut.actions'

// Section 1
const initialState: Tut = {
    name: 'Initial Task',
    number: 1
}

// Section 2
export function reducer(state: Tut[] = [initialState], action: TutActions.Actions) {

    // Section 3
    switch(action.type) {
        case TutActions.ADD_TUT:
            return [...state, action.payload];
        case TutActions.REMOVE_TUT:
            let newState = [...state];
            action.payload.forEach(e=>newState.splice(newState.indexOf(e), 1));
            return newState;
        default:
            return state;
    }
}