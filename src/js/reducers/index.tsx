import { UPDATE_CELLS } from "../actions/actionTypes";
import { BOARD_WIDTH, BOARD_HEIGHT, FINISH_POSITION_X, FINISH_POSITION_Y } from "../constants";
import { transformFromStateToGrid, transformFromGridToState } from "../misc/utils";
import { Cell, CellState, UpdateCellsAction } from "../misc/tsTypes";

interface Vector {
    x: number,
    y: number
}

interface Traversals {
    x: number[],
    y: number[]
}

const initialState: CellState = {
    cells: initializeCells()
};

// Build a grid of the specified width and height
function initializeCells(): Cell[] {
    let cells = [],
        tile;

    /* for (let x = 0; x < BOARD_WIDTH; x++) {
        let row = cells[x] = [];

        for (let y = 0; y < BOARD_HEIGHT; y++) {
            row.push(null);
        }
    } */

    const finishTile = {
        positionX: 5,
        positionY: 5,
        type: 'finish',
        uniqueKey: 0,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(finishTile)

    tile = {
        positionX: 5,
        positionY: 7,
        type: 'primary',
        uniqueKey: 6,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 9,
        type: 'primary',
        uniqueKey: 7,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 0,
        positionY: 0,
        type: 'primary',
        uniqueKey: 1,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 1,
        positionY: 1,
        type: 'secondary',
        uniqueKey: 2,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 1,
        positionY: 3,
        type: 'primary',
        uniqueKey: 3,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 4,
        positionY: 0,
        type: 'secondary',
        uniqueKey: 4,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 10,
        positionY: 10,
        type: 'primary',
        uniqueKey: 5,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 10,
        type: 'primary',
        uniqueKey: 8,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 9,
        type: 'primary',
        uniqueKey: 9,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    return cells;
};

function moveTile(move: number, cells: Cell[]): Cell[] {
    let cell: Cell,
        newPosition: Cell,
        cellsInGrid = transformFromStateToGrid(removeMergedCells(cells));
    const
        traversals = buildTraversals(move),
        moveVector = getMoveVector(move);

    cellsInGrid[FINISH_POSITION_X][FINISH_POSITION_Y].actionClass = ''; //remove merged css class from the finish tile

    // Traverse the grid in the right direction and move tiles
    traversals.x.forEach((x) => {
        traversals.y.forEach((y) => {
            cell = cellsInGrid[x][y];
            if (cell && cell.type !== 'finish') {
                newPosition = findAvailablePosition(cell, cellsInGrid, moveVector);
                if (newPosition.nextTile && (newPosition.nextTile.type === 'finish' || newPosition.nextTile.toBeMergedWithFinish)) {

                    //add merge class to the finish tile
                    if (newPosition.nextTile.type === 'finish') {
                        newPosition.nextTile.actionClass = 'merged';
                    }

                    //animate the movement with fading
                    if (newPosition.toBeMergedWithFinish) {
                        newPosition.actionClass = 'removed';
                    }

                    moveCell(cellsInGrid, newPosition, cell);
                } else if (newPosition.positionX !== cell.positionX || newPosition.positionY !== cell.positionY) {
                    moveCell(cellsInGrid, newPosition, cell);
                }
            };
        });
    });

    return transformFromGridToState(cellsInGrid);
    // TODO if (this.isGameTerminated()) return; // Don't do anything if the game's over
};

function removeMergedCells(cells:Cell[]): Cell[] {
    let filteredCells: Cell[];

    filteredCells = cells.filter(cell => !cell.toBeMergedWithFinish)

    return filteredCells;
};

function moveCell(cells:Cell[][], newPosition: Cell, prevPosition: Cell): Cell[][] {
    cells[newPosition.positionX][newPosition.positionY] = newPosition;
    cells[prevPosition.positionX][prevPosition.positionY] = null;

    return cells;
};

function getMoveVector(move: number): Vector {
    // Vectors representing tile movement
    const map = {
        1: { x: 0,  y: -1 }, // Up
        2: { x: 1,  y: 0 },  // Right
        3: { x: 0,  y: 1 },  // Down
        4: { x: -1, y: 0 }   // Left
    };

    return map[move];
};

// strongly inspired by https://github.com/gabrielecirulli/2048/blob/ac03b1f01628038039b74b67f2e284b233bd143e/js/game_manager.js#L207
function buildTraversals(move: number): Traversals {
    let traversals = {
        x: [],
        y: []
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
};

function findAvailablePosition(cell: Cell, cells: Cell[][], moveVector: Vector): Cell {
    let prevCell, tileFoundInNextCell, cellX, cellY, toBeMergedWithFinish;

    // Progress towards the move direction until an obstacle is found
    do {
        prevCell = cell;
        cellX = cell.positionX + moveVector.x; //TODO prevent pressing two keys at once
        cellY = cell.positionY + moveVector.y;
        tileFoundInNextCell = tileInCell(cells, cellX, cellY); //todo rename to tileInCell
        toBeMergedWithFinish = (tileFoundInNextCell && (tileFoundInNextCell.type === 'finish' || tileFoundInNextCell.toBeMergedWithFinish))
        cell = {
            positionX: cellX,
            positionY: cellY,
            type: cell.type,
            uniqueKey: cell.uniqueKey,
            actionClass: '',
            nextTile: tileFoundInNextCell, //need nextTile to animate the position to equal finish
            toBeMergedWithFinish: toBeMergedWithFinish
        };
        // console.log(cell, tileFoundInNextCell && tileFoundInNextCell.type === 'finish')
    } while (withinBounds(cell) &&
             !tileFoundInNextCell); //todo make sure that the calculation continues also when the next tile has tileFoundInNextCell flag

    //even if not moving, I have to check if cell is going to be merged
    prevCell.nextTile = tileFoundInNextCell;
    prevCell.toBeMergedWithFinish = toBeMergedWithFinish;
    return prevCell;
};

function withinBounds(cell: Cell): boolean {
    return cell.positionX >= 0 && cell.positionX < BOARD_WIDTH &&
         cell.positionY >= 0 && cell.positionY < BOARD_HEIGHT;
};

// returns content (tile) of a particular cell or null if tile not found
function tileInCell(cells: Cell[][], cellX: number, cellY: number): Cell | null {
    if (cells[cellX] && cells[cellX][cellY]) {
        return cells[cellX][cellY];
    } else {
        return null;
    }
};

const rootReducer = (state = initialState, action: UpdateCellsAction): CellState => {
    switch (action.type) {
        case UPDATE_CELLS:
            const newState = { ...state, cells: moveTile(action.payload, state.cells) };
            console.log('UPDATE_CELLS', 'state: ', state, 'action: ', action, 'newState: ', newState)
            return newState;
        default:
            return state;
    }
};

export default rootReducer;
