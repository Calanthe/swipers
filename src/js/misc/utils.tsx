import { BOARD_WIDTH, BOARD_HEIGHT } from "../misc/constants";
import { Cell, CellState } from "../misc/tsTypes";

/*
  This method transforms the 1dim array of visible tiles into 2dim array of both visible and empty
  tiles to easier calculate the collision and movement of the grid elements
*/
export function transformFromStateToGrid(cells: Cell[]): Cell[][] {
	let grid = [],
		tile,
		tilesNo = cells.length;

	for (let x = 0; x < BOARD_WIDTH; x++) {
		let row = (grid[x] = []);

		for (let y = 0; y < BOARD_HEIGHT; y++) {
			row.push(null);
		}
	}

	for (let x = 0; x < tilesNo; x++) {
		tile = cells[x];
		grid[tile.positionX][tile.positionY] = tile;
	}

	return grid;
}

/*
  This method transforms the 2dim array of of both visible and empty
  tiles into 1dim array of only visible tiles to store it as a state and properly show the movement in DOM
*/
export function transformFromGridToState(grid: Cell[][]): Cell[] {
	let cells = [];

	for (let x = 0; x < BOARD_WIDTH; x++) {
		for (let y = 0; y < BOARD_HEIGHT; y++) {
			if (grid[x][y]) {
				cells.push(grid[x][y]);
			}
		}
	}

	return cells;
}

export function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

export function isMobile() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		return true;
	} else {
		return false;
	}
}

Storage.prototype.setObject = function (key, obj) {
	return this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObject = function (key) {
	return JSON.parse(this.getItem(key));
};

export function setMaxScores(state: CellState): void {
	const localStorage = window.localStorage;

	localStorage.setObject("swipers_game--best_scores", state.maxScores);
}

export function getMaxScores(): Array<number> {
	const localStorage = window.localStorage;
	let emptyBestScores: Array<number> = new Array(9).fill(0);

	let bestScores = localStorage.getObject("swipers_game--best_scores");

	return typeof bestScores === "undefined" ||
		bestScores === null ||
		bestScores.length === 0
		? emptyBestScores
		: bestScores;
}

export function setStarScores(state: CellState): void {
	const localStorage = window.localStorage;

	localStorage.setObject("swipers_game--star_scores", state.starScores);
}

export function getStarScores(): Array<number> {
	const localStorage = window.localStorage;
	let emptyStarScores: Array<number> = new Array(9).fill(0);

	let starScores = localStorage.getObject("swipers_game--star_scores");

	return typeof starScores === "undefined" ||
		starScores === null ||
		starScores.length === 0
		? emptyStarScores
		: starScores;
}

export function setHintsVisibility(isHintsVisible: boolean): void {
	const localStorage = window.localStorage;

	localStorage.setObject("swipers_game--hints-visibility", isHintsVisible);
}

export function getHintsVisibility(): boolean {
	const localStorage = window.localStorage;
	let initialHintsVisibility: boolean = true;

	let hintsVisibility = localStorage.getObject(
		"swipers_game--hints-visibility"
	);

	return typeof hintsVisibility === "undefined" || hintsVisibility === null
		? initialHintsVisibility
		: hintsVisibility;
}

export function getLastLevelPlayed(initialLevel: number): number {
	const localStorage = window.localStorage;

	let lastLevelPlayed = localStorage.getObject(
		"swipers_game--last_level_played"
	);

	return typeof lastLevelPlayed === "undefined" || lastLevelPlayed === null
		? initialLevel
		: lastLevelPlayed;
}

export function setLastLevelPlayed(level: number): void {
	const localStorage = window.localStorage;

	localStorage.setObject("swipers_game--last_level_played", level);
}
