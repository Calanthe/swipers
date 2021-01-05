import {
	transformFromStateToGrid,
	transformFromGridToState,
	factorial,
} from "../misc/utils";

import { Cell, CellState } from "../misc/tsTypes";

export function resetCssClasses(state: CellState): Cell[] {
	let cellsInGrid = transformFromStateToGrid(state.levelData.cells);
	//remove 'merged' css class from the finish tiles
	state.levelData.finishCords.forEach((finishCoordinates) => {
		cellsInGrid[finishCoordinates.positionX][
			finishCoordinates.positionY
		].actionClass = "";
	});

	return transformFromGridToState(cellsInGrid);
}

export function updateScore(state: CellState, mergedCounter: number): void {
	const singleScore = factorial(mergedCounter) * mergedCounter * 10;

	state.levelData.singleScore = singleScore;
	state.levelData.score += singleScore;
	state.levelData.scoreClass = "score-up";

	if (state.levelData.score > state.maxScores[state.levelData.level]) {
		state.maxScores[state.levelData.level] = state.levelData.score;
		state.levelData.isNewBestScore = true;
	}
}

export function calculateStarScore(state: CellState): number {
	let starScore = 1; //if you manage to finish the level, get at least one star

	if (
		state.levelData.moves <= state.levelData.stars.maxMoves &&
		(!state.levelData.stars.maxPoints ||
			state.levelData.score === state.levelData.stars.maxPoints)
	) {
		starScore = 3;
	} else if (
		(state.levelData.moves <= state.levelData.stars.maxMoves &&
			state.levelData.stars.maxPoints &&
			state.levelData.score !== state.levelData.stars.maxPoints) ||
		state.levelData.moves <= state.levelData.stars.minMoves
	) {
		starScore = 2;
	}

	return starScore;
}
