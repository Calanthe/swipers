import { UPDATE_CELLS } from "../actions/actionTypes";
import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants";

const initialState = {
    articles: [],
    cells: initializeCells(),
};

// Build a grid of the specified width and height
function initializeCells() {
    let cells = [],
        tile;

    /* for (let x = 0; x < BOARD_WIDTH; x++) {
        let row = cells[x] = [];

        for (let y = 0; y < BOARD_HEIGHT; y++) {
            row.push(null);
        }
    } */

    // this is the new state now, one dimentional array with only tiles


    const finishTile = {
        positionX: 5,
        positionY: 5,
        type: 'finish',
        initialPosition: { x: 5, y: 5 }, //TODO I dont need this prop
        uniqueKey: 0
    };

    cells.push(finishTile)

    // cells[finishTile.positionX][finishTile.positionY] = finishTile;

    tile = {
        positionX: 0,
        positionY: 0,
        type: 'primary',
        initialPosition: { x: 0, y: 0 },
        uniqueKey: 1
    };

    cells.push(tile)
    // cells[tile.positionX][tile.positionY] = tile;

    tile = {
        positionX: 1,
        positionY: 1,
        type: 'secondary',
        initialPosition: { x: 1, y: 1 },
        uniqueKey: 2
    };

    cells.push(tile)
    //cells[tile.positionX][tile.positionY] = tile;

    tile = {
        positionX: 1,
        positionY: 3,
        type: 'primary',
        initialPosition: { x: 1, y: 3 },
        uniqueKey: 3
    };

    cells.push(tile)
    //cells[tile.positionX][tile.positionY] = tile;

    tile = {
        positionX: 4,
        positionY: 0,
        type: 'secondary',
        initialPosition: { x: 4, y: 0 },
        uniqueKey: 4
    };

    cells.push(tile)
    //cells[tile.positionX][tile.positionY] = tile;

    tile = {
        positionX: 10,
        positionY: 10,
        type: 'primary',
        initialPosition: { x: 10, y: 10 },
        uniqueKey: 5
    };

    cells.push(tile)
    //cells[tile.positionX][tile.positionY] = tile;

    return cells;
};

/*
  This method transforms the 1dim array of visible tiles into 2dim array of both visible and empty
  tiles to easier calculate the collision and movement of the grid elements
*/
function transformFromStateToGrid(cells) { //TODO move this to a separate file
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
function transformFromGridToState(grid) { //TODO move this to a separate file
    let cells = [],
        tile

    for (let x = 0; x < BOARD_WIDTH; x++) {
        for (let y = 0; y < BOARD_HEIGHT; y++) {
            if (grid[x][y]) {
                cells.push(grid[x][y])
            }
        }
    }

    return cells;
}

function moveTile(move, cells) {
    let cell, newPositionCell,
        updatedCells = transformFromStateToGrid(cells);
    const
        traversals = buildTraversals(move),
        moveVector = getMoveVector(move);

    // Traverse the grid in the right direction and move tiles
    traversals.x.forEach((x) => {
        traversals.y.forEach((y) => {
            cell = updatedCells[x][y];
            if (cell) {
                newPositionCell = findAvailablePosition(cell, updatedCells, moveVector);
                if (newPositionCell.positionX !== cell.positionX || newPositionCell.positionY !== cell.positionY) {
                    updatedCells[newPositionCell.positionX][newPositionCell.positionY] = newPositionCell;
                    updatedCells[cell.positionX][cell.positionY] = null;
                }
            };
        });
    });

    return transformFromGridToState(updatedCells);
    // TODO if (this.isGameTerminated()) return; // Don't do anything if the game's over
};

function getMoveVector(move) {
    // Vectors representing tile movement
    var map = {
        1: { x: 0,  y: -1 }, // Up
        2: { x: 1,  y: 0 },  // Right
        3: { x: 0,  y: 1 },  // Down
        4: { x: -1, y: 0 }   // Left
    };

    return map[move];
};

// strongly inspired by https://github.com/gabrielecirulli/2048/blob/ac03b1f01628038039b74b67f2e284b233bd143e/js/game_manager.js#L207
function buildTraversals(move) {
    let traversals = { x: [], y: [] };

    for (let pos = 0; pos < BOARD_WIDTH; pos++) {
        traversals.x.push(pos);
        traversals.y.push(pos);
    }

    // Always traverse from the farthest cell in the chosen direction
    // when moving right or down, reverse the natural order
    if (move === 2) traversals.x = traversals.x.reverse();
    if (move === 3) traversals.y = traversals.y.reverse();

    return traversals;
};

function findAvailablePosition(cell, cells, moveVector) {
    let prevCell

    // Progress towards the move direction until an obstacle is found
    do {
        prevCell = cell;
        cell = {
            positionX: cell.positionX + moveVector.x,
            positionY: cell.positionY + moveVector.y,
            type: cell.type,
            initialPosition: { x: cell.initialPosition.x, y: cell.initialPosition.y },
            uniqueKey: cell.uniqueKey
        }; // TODO do not create a new cell from scratch, change only positions
    } while (withinBounds(cell) &&
             !tileInCell(cells, cell));

    return prevCell
};

function withinBounds(cell) {
    return cell.positionX >= 0 && cell.positionX < BOARD_WIDTH &&
         cell.positionY >= 0 && cell.positionY < BOARD_HEIGHT;
};

// returns content (tile) of a particular cell
function tileInCell(cells, cell) {
    return cells[cell.positionX][cell.positionY];
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CELLS:
            const newState = { ...state, cells: moveTile(action.payload, state.cells) };
            console.log('UPDATE_CELLS', state, action, newState)
            return newState;
        default:
            return state;
    }
};

export default rootReducer;
