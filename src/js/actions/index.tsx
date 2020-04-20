import { UPDATE_CELLS, SET_ACTIVE_TYPE, RESTART_LEVEL, RESTART_GAME, SET_NEXT_LEVEL } from "./actionTypes";
import { Cell, UpdateCellsAction, SetActiveTypeAction, RestartLevelAction, RestartGameAction, SetNextLevelAction } from "../misc/tsTypes";

export function updateCells(keyPressedNo: number): UpdateCellsAction {
    return {
        type: UPDATE_CELLS,
        payload: keyPressedNo
    }
};

export function setActiveType(clickedTile: Cell): SetActiveTypeAction {
    return {
        type: SET_ACTIVE_TYPE,
        payload: clickedTile
    }
};

export function restartLevel(): RestartLevelAction {
    return {
        type: RESTART_LEVEL
    }
};

export function restartGame(): RestartGameAction {
    return {
        type: RESTART_GAME
    }
};

export function setNextLevel(): SetNextLevelAction {
    return {
        type: SET_NEXT_LEVEL
    }
};
