import { UPDATE_CELLS, SET_ACTIVE_TYPE, RESTART_LEVEL, SET_NEXT_LEVEL } from "../actions/actionTypes";

export interface Cell {
    positionX: number,
    positionY: number,
    type: number,
    uniqueKey: number,
    nextTile: Cell,
    toBeMergedWithFinish: boolean,
    actionClass: string
}

export interface FinishCords {
    positionX: number,
    positionY: number
}

export interface CellState {
    cells: Cell[],
    activeType: number,
    level: number,
    finishCords: FinishCords,
    score: number,
    scoreClass: string,
    isLevelFinished: boolean
}

export interface UpdateCellsAction {
    type: typeof UPDATE_CELLS,
    payload: number
}

export interface SetActiveTypeAction {
    type: typeof SET_ACTIVE_TYPE,
    payload: number
}

export interface RestartLevelAction {
    type: typeof RESTART_LEVEL
}

export interface SetNextLevelAction {
    type: typeof SET_NEXT_LEVEL
}

export interface RootReducerAction {
    type: string,
    payload: number
}
