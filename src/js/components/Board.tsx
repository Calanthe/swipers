import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { BOARD_WIDTH, BOARD_HEIGHT, FINISH_POSITION_X, FINISH_POSITION_Y, TILE_TYPES } from "../constants";
import Tile from "./Tile";
import { Cell } from "../misc/tsTypes";

interface Props {
    cells: Array<Cell>,
    activeType: number,
    onMouseClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const mapStateToProps = state => {
    return {
        cells: state.cells,
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
        boardClassName = classNames('game', TILE_TYPES[props.activeType]);
    let tiles = [];

        cells.forEach((cell, i) => {
            const
                typeClass = "tile-type-" + TILE_TYPES[cell.type],
                positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
                positionClassFinish = "tile-position-" + FINISH_POSITION_X + "-" + FINISH_POSITION_Y,
                actionClass = "tile-action-" + cell.actionClass,
                tileClassName = classNames('tile', typeClass, cell.toBeMergedWithFinish ? positionClassFinish : positionClass, actionClass),
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
