import React, { useState, useEffect } from "react";
import { Cell } from "../misc/tsTypes";

interface Props {
	tileClassName: string;
	cell: Cell;
	onMouseClick: (cell: Cell) => void;
}

const Tile: React.FunctionComponent<Props> = ({
	tileClassName,
	cell,
	onMouseClick,
}) => {
	const [newTileClassName, setData] = useState<Props["tileClassName"] | null>(
		null
	);

	useEffect(() => {
		requestAnimationFrame(() => {
			setData(tileClassName);
		});
	}, [tileClassName]);

	return (
		<div
			className={newTileClassName}
			data-type={cell.type}
			onClick={() => onMouseClick(cell)}
		/>
	);
};

export default Tile;
