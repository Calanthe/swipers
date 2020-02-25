import { UPDATE_CELLS, SET_ACTIVE_TYPE } from "./actionTypes";
import { UpdateCellsAction, SetActiveTypeAction } from "../misc/tsTypes";

export function updateCells(keyPressedNo: number): UpdateCellsAction {
    return {
        type: UPDATE_CELLS,
        payload: keyPressedNo
    }
};

export function setActiveType(clickedTile: number): SetActiveTypeAction {
    return {
        type: SET_ACTIVE_TYPE,
        payload: clickedTile
    }
};
