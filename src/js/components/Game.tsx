import * as React from "react";
import { connect } from "react-redux";
import Swipe from 'react-easy-swipe';
import Board from "./Board";
import Header from "./Header";
import InfoOverlay from "./InfoOverlay";
import MenuBar from "./MenuBar";
import Hint from "./Hint";
import {
	updateCells,
	setActiveType,
	restartCssClasses,
	restartLevel,
	restartGame,
	setNextLevel,
	showMenuOverlay
} from "../actions/index";
import { Cell } from "../misc/tsTypes";
import MenuOverlay from "./MenuOverlay";

interface GameProps {
	updateCells: typeof updateCells;
	setActiveType: typeof setActiveType;
	restartCssClasses: typeof restartCssClasses;
	restartLevel: typeof restartLevel;
	restartGame: typeof restartGame;
	setNextLevel: typeof setNextLevel;
	showMenuOverlay: typeof showMenuOverlay;
}

const IDLE_TIMER = 400; //ms

let isKeyPressed = false;

const mapDispatchToProps = (dispatch) => {
	return {
		updateCells: (keyPressedNo: number) => dispatch(updateCells(keyPressedNo)),
		setActiveType: (cell: Cell) => dispatch(setActiveType(cell)),
		restartCssClasses: () => dispatch(restartCssClasses()),
		restartLevel: () => dispatch(restartLevel()),
		restartGame: () => dispatch(restartGame()),
		setNextLevel: () => dispatch(setNextLevel()),
		showMenuOverlay: () => dispatch(showMenuOverlay())
	};
};

class Game extends React.Component<GameProps> {
	componentDidMount() {
		document.addEventListener("keydown", (event) => {
			//if (!isKeyPressed) {
			this.handleKeyPress(event.key);
			//isKeyPressed = true;
			window.setTimeout(() => {
				//isKeyPressed = false;
				this.props.restartCssClasses();
			}, IDLE_TIMER);
			//}
		});
	}

	handleKeyPress = (eventKey: string): void => {
		const KeyPressMap = {
			ArrowUp: 1,
			ArrowRight: 2,
			ArrowDown: 3,
			ArrowLeft: 4,
			w: 1, // W
			d: 2, // D
			s: 3, // S
			a: 4, // A
			SwipeUp: 1,
			SwipeRight: 2,
			SwipeDown: 3,
			SwipeLeft: 4
		};

		if (KeyPressMap[eventKey]) {
			this.props.updateCells(KeyPressMap[eventKey]);
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

	handleShowMenu = (): void => {
		this.props.showMenuOverlay();
	};

	onSwipeUp = (): void => {
		this.handleKeyPress('SwipeUp');
	};

	onSwipeDown = (): void => {
		this.handleKeyPress('SwipeDown');
	};

	onSwipeLeft = (): void => {
		this.handleKeyPress('SwipeLeft');
	};

	onSwipeRight = (): void => {
		this.handleKeyPress('SwipeRight');
	};

	onSwipeMove = (position, event) : boolean => {
		return true; //to prevent accidental scrolling on swipe
	};

	render() {
		return (
			<div className="app">
				<Swipe
					innerRef={() => {}}
					tolerance={20}
					onSwipeMove={this.onSwipeMove}
					onSwipeUp={this.onSwipeUp.bind(this)}
					onSwipeDown={this.onSwipeDown.bind(this)}
					onSwipeLeft={this.onSwipeLeft.bind(this)}
					onSwipeRight={this.onSwipeRight.bind(this)}>
					<Header/>
					<Board onMouseClick={this.handleMouseClick} />
					<InfoOverlay
						onLevelRestart={this.handleRestartLevel}
						onGameRestart={this.handleRestartGame}
						onNextLevel={this.handleSetNextLevel}
					/>
					<MenuBar
						onShowMenu={this.handleShowMenu}
						onLevelRestart={this.handleRestartLevel}
					/>
					<MenuOverlay
						onLevelRestart={this.handleRestartLevel}
						onGameRestart={this.handleRestartGame}
					/>
      			</Swipe>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Game);
