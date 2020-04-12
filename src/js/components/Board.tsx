import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { BOARD_WIDTH, BOARD_HEIGHT, TILE_TYPES } from "../misc/constants";
import Tile from "./Tile";
import { Cell, FinishCords } from "../misc/tsTypes";

interface Props {
    cells: Array<Cell>,
    finishCords: FinishCords,
    activeType: number,
    onMouseClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const mapStateToProps = state => {
    return {
        cells: state.cells,
        finishCords: state.finishCords,
        activeType: state.activeType
    };
};

class Block extends React.Component {
    render() {
        return (
            <div className="block"/>
        );
    }
}

class Grid extends React.Component {
    render() {
        let i,
            j,
            uniqueKey = '',
            blocks = [];

        for (i = 0; i < BOARD_WIDTH; i++) {
            for (j = 0; j < BOARD_HEIGHT; j++) {
                uniqueKey = i + ' ' +j;
                blocks.push(<Block key={uniqueKey}/>)
            }
        }

        return (
            <div className="grid">
                {blocks}
            </div>
        );
    }
}

const Board: React.FunctionComponent<Props> = (props) => {
    const
        cells = props.cells,
        finishCords = props.finishCords, //here we get only finish cords of active type, not whole array
        boardClassName = classNames('game', TILE_TYPES[props.activeType]);
    let tiles = [];

        cells.forEach((cell, i) => {
            const
                typeClass = "tile-type-" + TILE_TYPES[cell.type],
                positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
                positionClassFinish = "tile-position-" + finishCords.positionX + "-" + finishCords.positionY,
                actionClass = "tile-action-" + cell.actionClass,
                isTileActive = props.activeType === cell.type,
                isTileFinish = cell.isFinishTile,
                tileClassName = classNames('tile', typeClass, {'tile-type-finish': isTileFinish}, cell.toBeMergedWithFinish ? positionClassFinish : positionClass, actionClass, {'tile-active': isTileActive}),
                tile = <Tile tileClassName={tileClassName} tileType={cell.type} onMouseClick={props.onMouseClick} key={cell.uniqueKey.toString()}/>

            tiles.push(tile)
        });

    return (
        <div className={boardClassName}>
            <Grid/>
            <div className="board">
                {tiles}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Board);
