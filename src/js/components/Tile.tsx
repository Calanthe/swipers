import React, { useState, useEffect, FunctionComponent } from 'react';

interface Props {
    tileClassName: string,
    tileType: number,
    onMouseClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Tile: React.FunctionComponent<Props> = ({ tileClassName, tileType, onMouseClick }) => {
    const [newTileClassName, setData] = useState();

    useEffect(() => {
        requestAnimationFrame(() => {
            setData(tileClassName);
        })
    }, [tileClassName]);

    return (
        <div className={newTileClassName} data-type={tileType} onClick={onMouseClick}/>
    )
}

export default Tile
