import * as React from "react";
import { connect } from "react-redux";
//import classNames from 'classnames';
import Tile from "./Tile"
//TODO use https://github.com/css-modules/css-modules?

const mapStateToProps = state => {
  return {
      cells: state.cells
  };
};
//this is a stateless component
const Grid = () => {
    // const cells = props.cells;
    // let tiles = [],
    //     tile;

        // cells.forEach((cell, i) => {
        //     const
        //         typeClass = "tile-type-" + cell.type,
        //         positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
        //         tileClassName = classNames('tile', typeClass, positionClass),
        //
        //     tile = <Tile tileClassName={tileClassName} key={cell.uniqueKey.toString()}/>
        //     tiles.push(tile)
        // };

    // return (
    //     <div className="grid">
    //         {tiles}
    //     </div>;
    // )
    return <div className="grid">inside grid</div>
};

export default connect(mapStateToProps)(Grid);
