import {
	UPDATE_CELLS,
	SET_ACTIVE_TYPE,
	RESTART_LEVEL,
	RESTART_GAME,
	SET_NEXT_LEVEL,
} from "../actions/actionTypes";

export interface Cell {
	positionX: number;
	positionY: number;
	type: number;
	isFinishTile: boolean;
	uniqueKey: number;
	nextTile: Cell;
	toBeMergedWithFinish: boolean;
	actionClass: string;
}

export interface FinishCords {
	positionX: number;
	positionY: number;
}

export interface CellState {
	cells: Cell[];
	activeType: number;
	level: number;
	finishCords: Array<FinishCords>;
	nonStandardTilesAmount: number;
	hint: string;
	score: number;
	singleScore: number;
	scoreClass: string;
	moves: number;
	isLevelFinished: boolean;
	levelsAmount: number;
	isGameFinished: boolean;
}

export interface UpdateCellsAction {
	type: typeof UPDATE_CELLS;
	payload: number;
}

export interface SetActiveTypeAction {
	type: typeof SET_ACTIVE_TYPE;
	payload: Cell;
}

export interface RestartLevelAction {
	type: typeof RESTART_LEVEL;
}

export interface RestartGameAction {
	type: typeof RESTART_GAME;
}

export interface SetNextLevelAction {
	type: typeof SET_NEXT_LEVEL;
}

export interface RootReducerAction {
	type: string;
	payload: any;
}
