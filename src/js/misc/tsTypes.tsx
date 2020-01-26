import { UPDATE_CELLS } from "../actions/actionTypes";

export interface Cell {
    "positionX": number;
    "positionY": number;
    "type": string;
    "uniqueKey": number;
    "nextTile": Cell;
    "toBeMergedWithFinish": boolean;
    "actionClass": string;
}

export interface CellState {
    cells: Cell[];
}

export interface UpdateCellsAction {
    type: typeof UPDATE_CELLS;
    payload: number;
}
