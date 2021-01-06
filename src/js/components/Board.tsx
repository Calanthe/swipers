import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { TILE_TYPES } from "../misc/constants";
import Tile from "./Tile";
import { Cell, FinishCords } from "../misc/tsTypes";

interface Props {
	cells: Cell[];
	finishCords: Array<FinishCords>;
	activeType: number;
	onMouseClick: (cell: Cell) => void;
}

const mapStateToProps = (state) => {
	return {
		cells: state.levelData.cells,
		finishCords: state.levelData.finishCords,
		activeType: state.levelData.activeType,
	};
};

const Board: React.FunctionComponent<Props> = ({
	cells,
	finishCords,
	activeType,
	onMouseClick,
}) => {
	const activeFinishCords = finishCords[activeType - 1], //get only finish cords of active type, not the whole array
		boardClassName = classNames("game", TILE_TYPES[activeType]);
	let tiles = [];

	cells.forEach((cell, i) => {
		const typeClass = "tile-type-" + TILE_TYPES[cell.type],
			positionClass = "tile-position-" + cell.positionX + "-" + cell.positionY,
			positionClassFinish =
				"tile-position-" +
				activeFinishCords.positionX +
				"-" +
				activeFinishCords.positionY,
			actionClass = "tile-action-" + cell.actionClass,
			isTileActive = activeType === cell.type,
			isTileFinish = cell.isFinishTile,
			tileClassName = classNames(
				"tile",
				typeClass,
				{ "tile-type-finish": isTileFinish },
				cell.toBeMergedWithFinish ? positionClassFinish : positionClass,
				actionClass,
				{ "tile-active": isTileActive }
			),
			tile = (
				<Tile
					tileClassName={tileClassName}
					cell={cell}
					onMouseClick={onMouseClick}
					key={cell.uniqueKey.toString()}
				/>
			);

		tiles.push(tile);
	});

	return (
		<div className={boardClassName}>
			<div className="grid"></div>
			<div className="board">{tiles}</div>
		</div>
	);
};

export default connect(mapStateToProps)(Board);
