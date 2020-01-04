import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants";
import { Cell } from "../misc/tsTypes";

/*
  This method transforms the 1dim array of visible tiles into 2dim array of both visible and empty
  tiles to easier calculate the collision and movement of the grid elements
*/
export function transformFromStateToGrid(cells: Cell[]): Cell[][] {
    let grid = [],
        tile,
        tilesNo = cells.length;

    for (let x = 0; x < BOARD_WIDTH; x++) {
        let row = grid[x] = [];

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
    let cells = []

    for (let x = 0; x < BOARD_WIDTH; x++) {
        for (let y = 0; y < BOARD_HEIGHT; y++) {
            if (grid[x][y]) {
                cells.push(grid[x][y])
            }
        }
    }

    return cells;
}
