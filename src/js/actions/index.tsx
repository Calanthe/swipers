import { UPDATE_CELLS, SET_ACTIVE_TYPE, UPDATE_SCORE } from "./actionTypes";
import { UpdateCellsAction, SetActiveTypeAction, UpdateScoreAction } from "../misc/tsTypes";

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

export function updateScore(points: number): UpdateScoreAction {
    return {
        type: UPDATE_SCORE,
        payload: points
    }
};
