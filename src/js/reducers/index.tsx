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
import { BOARD_WIDTH, BOARD_HEIGHT, WALL_TYPE } from "../misc/constants";
import {
	transformFromStateToGrid,
	transformFromGridToState,
	getMaxScores,
	getStarScores,
	getLastLevelPlayed,
	getHintsVisibility,
	setMaxScores,
	setStarScores,
	setLastLevelPlayed,
	setHintsVisibility
} from "../misc/utils";
import { 
	resetCssClasses,
	updateScore,
	calculateStarScore
} from "../misc/helpers";
import {
	Cell,
	CellState,
	LevelData,
	FinishCords,
	RootReducerAction,
} from "../misc/tsTypes";
import { LEVELS } from "../misc/levels";

const INITIAL_LEVEL = 0;
const lastLevelPlayed = getLastLevelPlayed(INITIAL_LEVEL);

interface Vector {
	x: number;
	y: number;
}

interface Traversals {
	x: number[];
	y: number[];
}

function initializeState(level: number = 0): CellState {
	return {
		levelData: initializeLevel(level),
		maxScores: getMaxScores(), //an array with the best scores for every level
		starScores: getStarScores(), //an array with the best star scores for every level
		levelsAmount: LEVELS.length,
		isMenuVisible: true,
		isHintsVisible: getHintsVisibility(),
		isHintsOverlayVisible: false
	};
}

function initializeLevel(level: number = 0): LevelData {
	return {
		level: level,
		cells: initializeCells(level),
		finishCords: setFinishCords(level),
		activeType: 1,
		nonStandardTilesAmount: countTiles(level), //counter of nonstandard tiles, needed to calc if lvl is finished
		hint: setHint(level),
		stars: LEVELS[level][0].stars, //an object that indicates how many moves are neeed to get 1, 2 or 3 stars
		score: 0,
		singleScore: 0,
		scoreClass: "",
		isNewBestScore: false,
		moves: 0,
		isLevelFinished: false,
		isGameFinished: false,
	}
}

// Build a grid based on the current level
function initializeCells(level: number = 0): Cell[] {
	let cells = [],
		newTile,
		currentLevel = LEVELS[level],
		uniqueKey = 0;

	currentLevel.forEach((tile) => {
		newTile = {
			...tile,
			uniqueKey: uniqueKey,
			tileFoundInNextCell: false,
			actionClass: "",
		};
		uniqueKey++;
		cells.push(newTile);
	});

	return cells;
}

function setFinishCords(level: number = 0): Array<FinishCords> {
	let finishCords = [],
		currentLevel = LEVELS[level];

	currentLevel.forEach((tile) => {
		if (tile.isFinishTile) {
			let coordinate = {
				positionX: tile.positionX,
				positionY: tile.positionY,
			};
			finishCords.push(coordinate);
		}
	});

	return finishCords;
}

function countTiles(level: number = 0): number {
	let currentLevel = LEVELS[level];

	let tilesAmount = currentLevel.reduce(function (accumulator, currentValue) {
		if (currentValue.isFinishTile || currentValue.type === WALL_TYPE) {
			return accumulator + 1;
		} else {
			return accumulator;
		}
	}, 0);

	return tilesAmount;
}

function setHint(level: number = 0): string {
	let hint = "",
		currentLevel = LEVELS[level];

	currentLevel.forEach((tile) => {
		if (tile.hint) {
			hint = tile.hint;
			return;
		}
	});

	return hint;
}

function moveTile(move: number, state: CellState): Cell[] {
	let cell: Cell,
		newPosition: Cell,
		availableCells = removeMergedCells(state.levelData.cells),
		cellsInGrid = transformFromStateToGrid(availableCells),
		cellsAmount = availableCells.length - state.levelData.nonStandardTilesAmount,
		mergedCounter: number = 0,
		alreadyMovedTile: boolean = false;

	const traversals = buildTraversals(move),
		moveVector = getMoveVector(move);

	//close hints overlay if still open
	if (state.isHintsOverlayVisible) {
		state.isHintsOverlayVisible = false;
	}

	resetCssClasses(state);

	// Traverse the grid in the right direction and move tiles
	traversals.x.forEach((x) => {
		traversals.y.forEach((y) => {
			cell = cellsInGrid[x][y];
			if (cell && cell.type === state.levelData.activeType && !cell.isFinishTile) {
				newPosition = findAvailablePosition(cell, cellsInGrid, moveVector);
				if (
					newPosition.nextTile &&
					((newPosition.nextTile.isFinishTile &&
						newPosition.nextTile.type === cell.type) ||
						newPosition.nextTile.toBeMergedWithFinish)
				) {
					//add merge class to the finish tile
					if (
						newPosition.nextTile.isFinishTile &&
						newPosition.nextTile.type === cell.type
					) {
						newPosition.nextTile.actionClass = "merged";
					}

					//animate the movement with fading
					if (newPosition.toBeMergedWithFinish) {
						newPosition.actionClass = "removed";
					}

					mergedCounter++;
					cellsAmount--;
				}
				moveCell(cellsInGrid, newPosition, cell);

				if (!alreadyMovedTile) {
					state.levelData.moves++;
					alreadyMovedTile = true;
				}
			}
		});
	});

	if (!mergedCounter) {
		state.levelData.scoreClass = "";
	} else {
		updateScore(state, mergedCounter);
	}

	if (cellsAmount === 0) {
		state.levelData.isLevelFinished = true;
		state.starScores[state.levelData.level] = calculateStarScore(state);

		setMaxScores(state);
		setStarScores(state);

		if (state.levelData.level === state.levelsAmount - 1) {
			state.levelData.isGameFinished = true;
		}
	}

	return transformFromGridToState(cellsInGrid);
}

function removeMergedCells(cells: Cell[]): Cell[] {
	let filteredCells: Cell[];

	filteredCells = cells.filter((cell) => !cell.toBeMergedWithFinish);

	return filteredCells;
}

function moveCell(cells: Cell[][], newPosition: Cell, prevPosition: Cell) {
	if (
		newPosition.positionX !== prevPosition.positionX ||
		newPosition.positionY !== prevPosition.positionY
	) {
		cells[newPosition.positionX][newPosition.positionY] = newPosition;
		cells[prevPosition.positionX][prevPosition.positionY] = null;
	}

	return;
}

function getMoveVector(move: number): Vector {
	// Vectors representing tile movement
	const map = {
		1: { x: 0, y: -1 }, // Up
		2: { x: 1, y: 0 }, // Right
		3: { x: 0, y: 1 }, // Down
		4: { x: -1, y: 0 }, // Left
	};

	return map[move];
}

// strongly inspired by https://github.com/gabrielecirulli/2048/blob/ac03b1f01628038039b74b67f2e284b233bd143e/js/game_manager.js#L207
function buildTraversals(move: number): Traversals {
	let traversals = {
		x: [],
		y: [],
	};

	for (let pos = 0; pos < BOARD_WIDTH; pos++) {
		traversals.x.push(pos);
		traversals.y.push(pos);
	}

	// Always traverse from the farthest cell in the chosen direction
	// when moving right or down, reverse the natural order
	if (move === 2) traversals.x = traversals.x.reverse();
	if (move === 3) traversals.y = traversals.y.reverse();

	return traversals;
}

function findAvailablePosition(
	cell: Cell,
	cells: Cell[][],
	moveVector: Vector
): Cell {
	let prevCell, tileFoundInNextCell, cellX, cellY, toBeMergedWithFinish;

	// Progress towards the move direction until an obstacle is found
	do {
		prevCell = cell;
		cellX = cell.positionX + moveVector.x;
		cellY = cell.positionY + moveVector.y;
		tileFoundInNextCell = tileInCell(cells, cellX, cellY);
		toBeMergedWithFinish =
			tileFoundInNextCell &&
			((tileFoundInNextCell.isFinishTile &&
				tileFoundInNextCell.type === cell.type) ||
				tileFoundInNextCell.toBeMergedWithFinish);
		cell = {
			positionX: cellX,
			positionY: cellY,
			type: cell.type,
			isFinishTile: cell.isFinishTile,
			uniqueKey: cell.uniqueKey,
			actionClass: "",
			nextTile: tileFoundInNextCell, //need nextTile to animate the position to equal finish
			toBeMergedWithFinish: toBeMergedWithFinish,
		};
	} while (withinBounds(cell) && !tileFoundInNextCell);

	//even if not moving, I have to check if cell is going to be merged
	prevCell.nextTile = tileFoundInNextCell;
	prevCell.toBeMergedWithFinish = toBeMergedWithFinish;
	return prevCell;
}

function withinBounds(cell: Cell): boolean {
	return (
		cell.positionX >= 0 &&
		cell.positionX < BOARD_WIDTH &&
		cell.positionY >= 0 &&
		cell.positionY < BOARD_HEIGHT
	);
}

// returns content (tile) of a particular cell or null if tile not found
function tileInCell(
	cells: Cell[][],
	cellX: number,
	cellY: number
): Cell | null {
	if (cells[cellX] && cells[cellX][cellY]) {
		return cells[cellX][cellY];
	} else {
		return null;
	}
}

function setActiveType(cell: Cell, activeType: number): number {
	return cell.type !== WALL_TYPE ? cell.type : activeType;
}

function toogleHintsAvailable(state: CellState): CellState {
	const newState = {
		...state,
		isHintsVisible: !state.isHintsVisible
	};

	setHintsVisibility(!state.isHintsVisible);

	return newState;
}

const rootReducer = (
	state = initializeState(lastLevelPlayed),
	action: RootReducerAction
): CellState => {
	let newState;

	switch (action.type) {
		case UPDATE_CELLS:
			newState = { 
				...state,
				levelData: {...state.levelData, cells: moveTile(action.payload, state)}
			};
			return newState;
		case SET_ACTIVE_TYPE:
			newState = {
				...state,
				levelData: {...state.levelData, activeType: setActiveType(action.payload, state.levelData.activeType)}
			};
			return newState;
		case RESTART_CSS_CLASSES:
			newState = {
				...state,
				levelData: {...state.levelData, cells: resetCssClasses(state), scoreClass: ""}
			};
			return newState;
		case RESTART_LEVEL:
			newState = { 
				...state, 
				levelData: initializeLevel(state.levelData.level), 
				isMenuVisible: false,
				isHintsOverlayVisible: true
			};
			return newState;
		case RESTART_GAME:
			newState = { 
				...state, 
				levelData: initializeLevel(INITIAL_LEVEL), 
				isMenuVisible: false,
				isHintsOverlayVisible: true
			};
			return newState;
		case SET_NEXT_LEVEL:
			newState = { 
				...state, 
				levelData: initializeLevel(state.levelData.level + 1),
				isHintsOverlayVisible: true
			};
			setLastLevelPlayed(state.levelData.level + 1);
			return newState;
		case SET_LEVEL:
			newState = { 
				...state, 
				levelData: initializeLevel(action.payload), 
				isMenuVisible: false,
				isHintsOverlayVisible: true
			};
			setLastLevelPlayed(action.payload);
			return newState;
		case TOGGLE_MENU_OVERLAY:
			newState = {
				...state,
				starScores: getStarScores(),
				isMenuVisible: !state.isMenuVisible
			};
			return newState;
		case TOGGLE_HINTS:
			newState = toogleHintsAvailable(state);
			return newState;
		case SHOW_HINTS_OVERLAY:
			newState = {
				...state,
				isHintsOverlayVisible: true
			};
			return newState;
		case HIDE_HINTS_OVERLAY:
			newState = {
				...state,
				isHintsOverlayVisible: false
			};
			return newState;
		default:
			return state;
	}
};

export default rootReducer;
