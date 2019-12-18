import React, { useState, useEffect } from 'react';

const Tile = ({ tileClassName }) => {
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
