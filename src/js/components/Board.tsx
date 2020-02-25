import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { FINISH_POSITION_X, FINISH_POSITION_Y, TILE_TYPES } from "../constants";
import Tile from "./Tile";
import { Cell } from "../misc/tsTypes";

interface Props {
    cells: Array<Cell>,
    onMouseClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const mapStateToProps = state => {
    return {
        cells: state.cells
    };
};

const Board: React.FunctionComponent<Props> = (props) => {
    const cells = props.cells;
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
        <div className="grid">
            {tiles}
        </div>
    );
};

export default connect(mapStateToProps)(Board);
