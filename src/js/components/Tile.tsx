import React, { useState, useEffect, FunctionComponent } from 'react';
import { Cell } from "../misc/tsTypes";

interface Props {
    tileClassName: any,
    cell: Cell,
    onMouseClick: (cell: Cell) => void
}

const Tile: React.FunctionComponent<Props> = ({ tileClassName, cell, onMouseClick }) => {
    const [newTileClassName, setData] = useState();

    useEffect(() => {
        requestAnimationFrame(() => {
            setData(tileClassName);
        })
    }, [tileClassName]);

    return (
        <div className={newTileClassName} onClick={() => onMouseClick(cell)}/>
    )
}

export default Tile
