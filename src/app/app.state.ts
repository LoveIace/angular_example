import { Tut } from './models/tut.model'

export interface AppState {
    readonly tut: Tut[];
}