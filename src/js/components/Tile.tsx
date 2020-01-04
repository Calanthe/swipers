import React, { useState, useEffect, FunctionComponent } from 'react';

interface Props {
    tileClassName: string;
}

const Tile: React.FunctionComponent<Props> = ({ tileClassName }) => {
    const [newTileClassName, setData] = useState();

    useEffect(() => {
        requestAnimationFrame(() => {
            setData(tileClassName);
        })
    }, [tileClassName]);

    return (
        <div className={newTileClassName}/>
    )
}

export default Tile
