import * as React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Header from "./Header";
import InfoOverlay from "./InfoOverlay";
import Hint from "./Hint";
import {
	updateCells,
	setActiveType,
	restartCssClasses,
	restartLevel,
	restartGame,
	setNextLevel,
} from "../actions/index";
import { Cell } from "../misc/tsTypes";

interface GameProps {
	updateCells: typeof updateCells;
	setActiveType: typeof setActiveType;
	restartCssClasses: typeof restartCssClasses;
	restartLevel: typeof restartLevel;
	restartGame: typeof restartGame;
	setNextLevel: typeof setNextLevel;
}

interface KeyboardEvent {
	key: string;
}

const IDLE_TIMER = 1000; //ms

const mapDispatchToProps = (dispatch) => {
	return {
		updateCells: (keyPressedNo: number) => dispatch(updateCells(keyPressedNo)),
		setActiveType: (cell: Cell) => dispatch(setActiveType(cell)),
		restartCssClasses: () => dispatch(restartCssClasses()),
		restartLevel: () => dispatch(restartLevel()),
		restartGame: () => dispatch(restartGame()),
		setNextLevel: () => dispatch(setNextLevel()),
	};
};

class Game extends React.Component<GameProps> {
	componentDidMount() {
		document.addEventListener("keydown", (event) => {
			this.handleKeyPress(event);
			window.setTimeout(() => {
				this.props.restartCssClasses();
			}, IDLE_TIMER);
		});
	}

	handleKeyPress = (event: KeyboardEvent): void => {
		const KeyPressMap = {
			ArrowUp: 1,
			ArrowRight: 2,
			ArrowDown: 3,
			ArrowLeft: 4,
			w: 1, // W
			d: 2, // D
			s: 3, // S
			a: 4, // A
		};

		if (KeyPressMap[event.key]) {
			this.props.updateCells(KeyPressMap[event.key]);
		}
	};

	handleMouseClick = (cell: Cell): void => {
		this.props.setActiveType(cell);
	};

	handleRestartLevel = (): void => {
		this.props.restartLevel();
	};

	handleRestartGame = (): void => {
		this.props.restartGame();
	};

	handleSetNextLevel = (): void => {
		this.props.setNextLevel();
	};

	render() {
		return (
			<div className="app">
				<Header />
				<Board onMouseClick={this.handleMouseClick} />
				<Hint
					onLevelRestart={this.handleRestartLevel}
					onGameRestart={this.handleRestartGame}
				/>
				<InfoOverlay
					onLevelRestart={this.handleRestartLevel}
					onGameRestart={this.handleRestartGame}
					onNextLevel={this.handleSetNextLevel}
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Game);
