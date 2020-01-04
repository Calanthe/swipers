import { UPDATE_CELLS } from "./actionTypes";
import { UpdateCellsAction } from "../misc/tsTypes";

export function updateCells(keyPressed: number): UpdateCellsAction {
    return {
        type: UPDATE_CELLS,
        payload: keyPressed
    }
};
