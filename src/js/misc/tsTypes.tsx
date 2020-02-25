import { UPDATE_CELLS, SET_ACTIVE_TYPE } from "../actions/actionTypes";

export interface Cell {
    "positionX": number,
    "positionY": number,
    "type": number,
    "uniqueKey": number,
    "nextTile": Cell,
    "toBeMergedWithFinish": boolean,
    "actionClass": string
}

export interface CellState {
    cells: Cell[],
    activeType: number
}

export interface UpdateCellsAction {
    type: typeof UPDATE_CELLS,
    payload: number
}

export interface SetActiveTypeAction {
    type: typeof SET_ACTIVE_TYPE,
    payload: number
}

export interface RootReducerAction {
    type: string,
    payload: number
}
