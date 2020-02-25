import { UPDATE_CELLS, SET_ACTIVE_TYPE } from "../actions/actionTypes";
import { BOARD_WIDTH, BOARD_HEIGHT, FINISH_POSITION_X, FINISH_POSITION_Y, FINISH_TYPE } from "../constants";
import { transformFromStateToGrid, transformFromGridToState } from "../misc/utils";
import { Cell, CellState, RootReducerAction } from "../misc/tsTypes";

interface Vector {
    x: number,
    y: number
}

interface Traversals {
    x: number[],
    y: number[]
}

const initialState: CellState = {
    cells: initializeCells(),
    activeType: 1
};

// Build a grid of the specified width and height
function initializeCells(): Cell[] {
    let cells = [],
        tile;

    const finishTile = {
        positionX: 5,
        positionY: 5,
        type: 0,
        uniqueKey: 0,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(finishTile)

    tile = {
        positionX: 5,
        positionY: 7,
        type: 1,
        uniqueKey: 6,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 9,
        type: 1,
        uniqueKey: 7,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 0,
        positionY: 0,
        type: 1,
        uniqueKey: 1,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 1,
        positionY: 1,
        type: 2,
        uniqueKey: 2,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 1,
        positionY: 3,
        type: 1,
        uniqueKey: 3,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 4,
        positionY: 0,
        type: 2,
        uniqueKey: 4,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 10,
        positionY: 10,
        type: 1,
        uniqueKey: 5,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 10,
        type: 1,
        uniqueKey: 8,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    tile = {
        positionX: 5,
        positionY: 9,
        type: 1,
        uniqueKey: 9,
        tileFoundInNextCell: false,
        actionClass: ''
    };

    cells.push(tile)

    return cells;
};

function moveTile(move: number, state: CellState): Cell[] {
    let cell: Cell,
        newPosition: Cell,
        cellsInGrid = transformFromStateToGrid(removeMergedCells(state.cells));
    const
        traversals = buildTraversals(move),
        moveVector = getMoveVector(move);

    cellsInGrid[FINISH_POSITION_X][FINISH_POSITION_Y].actionClass = ''; //remove merged css class from the finish tile

    // Traverse the grid in the right direction and move tiles
    traversals.x.forEach((x) => {
        traversals.y.forEach((y) => {
            cell = cellsInGrid[x][y];
            if (cell && cell.type === state.activeType) {
                newPosition = findAvailablePosition(cell, cellsInGrid, moveVector);
                if (newPosition.nextTile && (newPosition.nextTile.type === FINISH_TYPE || newPosition.nextTile.toBeMergedWithFinish)) {

                    //add merge class to the finish tile
                    if (newPosition.nextTile.type === FINISH_TYPE) {
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
        tileFoundInNextCell = tileInCell(cells, cellX, cellY);
        toBeMergedWithFinish = (tileFoundInNextCell && (tileFoundInNextCell.type === FINISH_TYPE || tileFoundInNextCell.toBeMergedWithFinish))
        cell = {
            positionX: cellX,
            positionY: cellY,
            type: cell.type,
            uniqueKey: cell.uniqueKey,
            actionClass: '',
            nextTile: tileFoundInNextCell, //need nextTile to animate the position to equal finish
            toBeMergedWithFinish: toBeMergedWithFinish
        };
    } while (withinBounds(cell) &&
             !tileFoundInNextCell);

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

function setActiveType(newType: number, activeType: number): number {
    return newType !== FINISH_TYPE ? newType : activeType;
};

const rootReducer = (state = initialState, action: RootReducerAction): CellState => {
    let newState

    switch (action.type) {
        case UPDATE_CELLS:
            newState = { ...state, cells: moveTile(action.payload, state) };
            console.log('UPDATE_CELLS', 'state: ', state, 'action: ', action, 'newState: ', newState)
            return newState;
        case SET_ACTIVE_TYPE:
            newState = { ...state, activeType: setActiveType(action.payload, state.activeType) };
            console.log('SET_ACTIVE_TYPE', 'state: ', state, 'action: ', action, 'newState: ', newState)
            return newState;
        default:
            return state;
    }
};

export default rootReducer;
