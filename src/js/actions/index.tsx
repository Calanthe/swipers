import {
	UPDATE_CELLS,
	SET_ACTIVE_TYPE,
	RESTART_CSS_CLASSES,
	RESTART_LEVEL,
	RESTART_GAME,
	SET_NEXT_LEVEL,
	TOOGLE_MENU_OVERLAY
} from "./actionTypes";
import {
	Cell,
	UpdateCellsAction,
	SetActiveTypeAction,
	RestartCssClasses,
	RestartLevelAction,
	RestartGameAction,
	SetNextLevelAction,
	toggleMenuOverlayAction
} from "../misc/tsTypes";

export function updateCells(keyPressedNo: number): UpdateCellsAction {
	return {
		type: UPDATE_CELLS,
		payload: keyPressedNo,
	};
}

export function setActiveType(clickedTile: Cell): SetActiveTypeAction {
	return {
		type: SET_ACTIVE_TYPE,
		payload: clickedTile,
	};
}

export function restartCssClasses(): RestartCssClasses {
	return {
		type: RESTART_CSS_CLASSES,
	};
}

export function restartLevel(): RestartLevelAction {
	return {
		type: RESTART_LEVEL,
	};
}

export function restartGame(): RestartGameAction {
	return {
		type: RESTART_GAME,
	};
}

export function setNextLevel(): SetNextLevelAction {
	return {
		type: SET_NEXT_LEVEL,
	};
}

export function toggleMenuOverlay(): toggleMenuOverlayAction {
	return {
		type: TOOGLE_MENU_OVERLAY,
	};
}
