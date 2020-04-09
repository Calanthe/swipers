import { UPDATE_CELLS, SET_ACTIVE_TYPE, RESTART_LEVEL, SET_NEXT_LEVEL } from "../actions/actionTypes";
import { BOARD_WIDTH, BOARD_HEIGHT, FINISH_TYPE, WALL_TYPE } from "../misc/constants";
import { transformFromStateToGrid, transformFromGridToState } from "../misc/utils";
import { Cell, CellState, FinishCords, RootReducerAction } from "../misc/tsTypes";
import { LEVELS } from "../misc/levels";

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
    activeType: 1,
    level: 0,
    finishCords: setFinishCords(),
    score: 0,
    scoreClass: '',
    isLevelFinished: false
};

// Build a grid based on the current level, 0 by default
function initializeCells(level:number = 0): Cell[] {
    let cells = [],
        newTile,
        currentLevel = LEVELS[level],
        uniqueKey = 0;

    currentLevel.forEach(tile => {
        newTile = {
            ...tile,
            uniqueKey: uniqueKey,
            tileFoundInNextCell: false,
            actionClass: ''
        }
        uniqueKey++;
        cells.push(newTile)
    });

    return cells;
};

function setFinishCords(level:number = 0): FinishCords {
    let cords = {
            positionX: 0,
            positionY: 0,
        },
        currentLevel = LEVELS[level];

    currentLevel.forEach(tile => {
        if (tile.type === FINISH_TYPE) {
            cords.positionX = tile.positionX;
            cords.positionY = tile.positionY;
        }
    });

    return cords;
};

function moveTile(move: number, state: CellState): Cell[] {
    let cell: Cell,
        newPosition: Cell,
        cellsInGrid = transformFromStateToGrid(removeMergedCells(state.cells)),
        cellsAmount = state.cells.length - 1,
        mergedCounter: number = 0;

    const
        traversals = buildTraversals(move),
        moveVector = getMoveVector(move);

    //TODO fix a bug where finish tile does not pop out after changing active color and merging
    cellsInGrid[state.finishCords.positionX][state.finishCords.positionY].actionClass = ''; //remove merged css class from the finish tile

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

                    mergedCounter++;

                    cellsAmount--;
                    moveCell(cellsInGrid, newPosition, cell);
                } else if (newPosition.positionX !== cell.positionX || newPosition.positionY !== cell.positionY) {
                    moveCell(cellsInGrid, newPosition, cell);
                }
            };
        });
    });

    updateScore(state, mergedCounter);

    if (cellsAmount === 0) {
        state.isLevelFinished = true;
    }

    return transformFromGridToState(cellsInGrid);
};

function updateScore(state: CellState, points: number): void {
    state.score += points;
    if (points > 1) {
        state.scoreClass = 'score-combo';
    } else {
        state.scoreClass = 'score-up';
    }
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
    return (newType !== FINISH_TYPE && newType !== WALL_TYPE) ? newType : activeType;
};

const rootReducer = (state = initialState, action: RootReducerAction): CellState => {
    let newState

    switch (action.type) {
        case UPDATE_CELLS:
            newState = { ...state, cells: moveTile(action.payload, state) };
            return newState;
        case SET_ACTIVE_TYPE:
            newState = { ...state, activeType: setActiveType(action.payload, state.activeType) };
            return newState;
        case RESTART_LEVEL:
            newState = { ...state, cells: initializeCells(), activeType: 1, score: 0, isLevelFinished: false};
            console.log(RESTART_LEVEL)
            return newState;
        case SET_NEXT_LEVEL:
            newState = { ...state, cells: initializeCells(state.level), finishCords: setFinishCords(state.level), level: state.level + 1, activeType: 1, score: 0, isLevelFinished: false };
            return newState;
        default:
            return state;
    }
};

export default rootReducer;
