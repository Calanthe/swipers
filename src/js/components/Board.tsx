import * as React from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import Tile from "./Tile"

const mapStateToProps = state => {
  return {
      cells: state.cells
  };
};

//this is a stateless component
const Board = (props) => {
    const cells = props.cells;
    let tiles = [];

        cells.forEach((cell, i) => {
            const
                typeClass = "tile-type-" + cell.type,
                positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
                tileClassName = classNames('tile', typeClass, positionClass),
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
