// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tut } from './../models/tut.model'

// Section 2
export const ADD_TUT       = '[TUT] Add'
export const REMOVE_TUT    = '[TUT] Remove'
export const INCREMENT_TUT = '[TUT] Increment'

// Section 3
export class AddTut implements Action {
    readonly type = ADD_TUT

    constructor(public payload: Tut) {}
}

export class RemoveTut implements Action {
    readonly type = REMOVE_TUT

    constructor(public payload: any[]) {}
}

export class IncrementTut implements Action {
    readonly type = INCREMENT_TUT

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTut | RemoveTut | IncrementTut