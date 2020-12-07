import {
	UPDATE_CELLS,
	SET_ACTIVE_TYPE,
	RESTART_CSS_CLASSES,
	RESTART_LEVEL,
	RESTART_GAME,
	SET_NEXT_LEVEL,
	SET_LEVEL,
	TOGGLE_MENU_OVERLAY,
	TOGGLE_HINTS,
	SHOW_HINTS_OVERLAY,
	HIDE_HINTS_OVERLAY
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

interface StarsThresholds {
	maxPoints: number;
	minPoints: number;
}

export interface LevelData {
	level: number;
	cells: Cell[];
	finishCords: Array<FinishCords>;
	activeType: number;
	nonStandardTilesAmount: number;
	hint: string;
	stars: StarsThresholds;
	score: number;
	singleScore: number;
	scoreClass: string;
	isNewBestScore: boolean;
	moves: number;
	isLevelFinished: boolean;
	isGameFinished: boolean;

}

export interface CellState {
	levelData: LevelData;
	maxScores: Array<number>;
	starScores: Array<number>;
	levelsAmount: number;
	isMenuVisible: boolean;
	isHintsVisible: boolean;
	isHintsOverlayVisible: boolean;
}

export interface tileInLevel {
	positionX: number;
	positionY: number;
	type: number;
	isFinishTile: boolean;
	hint?: string;
	stars?: StarsThresholds;
}

export interface UpdateCellsAction {
	type: typeof UPDATE_CELLS;
	payload: number;
}

export interface SetActiveTypeAction {
	type: typeof SET_ACTIVE_TYPE;
	payload: Cell;
}

export interface RestartCssClasses {
	type: typeof RESTART_CSS_CLASSES;
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

export interface SetLevelAction {
	type: typeof SET_LEVEL;
	payload: number;
}

export interface toggleMenuOverlayAction {
	type: typeof TOGGLE_MENU_OVERLAY;
}

export interface toggleHintsAction {
	type: typeof TOGGLE_HINTS;
}

export interface showHintsOverlayAction {
	type: typeof SHOW_HINTS_OVERLAY;
}

export interface hideHintsOverlayAction {
	type: typeof HIDE_HINTS_OVERLAY;
}

export interface RootReducerAction {
	type: string;
	payload: any;
}
