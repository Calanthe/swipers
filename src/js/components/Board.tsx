import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import Tile from "./Tile";
import { Cell } from "../misc/tsTypes";

interface Props {
    cells: Array<Cell>;
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
                typeClass = "tile-type-" + cell.type,
                positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
                actionClass = "tile-action-" + cell.actionClass,
                tileClassName = classNames('tile', typeClass, positionClass, actionClass),
                tile = <Tile tileClassName={tileClassName} key={cell.uniqueKey.toString()}/>

            tiles.push(tile)
        });

    return (
        <div className="grid">
            {tiles}
        </div>
    );
};

export default connect(mapStateToProps)(Board);
