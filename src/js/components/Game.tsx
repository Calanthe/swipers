import * as React from "react";
import { connect } from "react-redux";
import Swipe from "react-easy-swipe";
import Board from "./Board";
import Header from "./Header";
import InfoOverlay from "./InfoOverlay";
import HintsOverlay from "./HintsOverlay";
import MenuBar from "./MenuBar";
import {
	updateCells,
	setActiveType,
	restartCssClasses,
	restartLevel,
	restartGame,
	setNextLevel,
	setLevel,
	toggleMenuOverlay,
	toggleHints,
	hideHintsOverlay,
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
	setLevel: typeof setLevel;
	toggleMenuOverlay: typeof toggleMenuOverlay;
	toggleHints: typeof toggleHints;
	hideHintsOverlay: typeof hideHintsOverlay;
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCells: (keyPressedNo: number) => dispatch(updateCells(keyPressedNo)),
		setActiveType: (cell: Cell) => dispatch(setActiveType(cell)),
		restartCssClasses: () => dispatch(restartCssClasses()),
		restartLevel: () => dispatch(restartLevel()),
		restartGame: () => dispatch(restartGame()),
		setNextLevel: () => dispatch(setNextLevel()),
		setLevel: (levelNo: number) => dispatch(setLevel(levelNo)),
		toggleMenuOverlay: () => dispatch(toggleMenuOverlay()),
		toggleHints: () => dispatch(toggleHints()),
		hideHintsOverlay: () => dispatch(hideHintsOverlay()),
	};
};

const IDLE_TIMER = 200;
let isKeyPressed = false;

class Game extends React.Component<GameProps> {
	componentDidMount() {
		document.addEventListener("keydown", (event) => {
			this.handleMove(event.key);
		});
	}

	handleMove = (eventKey: string): void => {
		if (!isKeyPressed) {
			this.handleCellsUpdate(eventKey);
			isKeyPressed = true;
			window.setTimeout(() => {
				isKeyPressed = false;
			}, IDLE_TIMER); //to prevent moving tiles diagonally
		}
	};

	handleCellsUpdate = (eventKey: string): void => {
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
			SwipeLeft: 4,
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

	handleToggleMenu = (): void => {
		this.props.toggleMenuOverlay();
	};

	handleSetNextLevel = (): void => {
		this.props.setNextLevel();
	};

	handleSetLevel = (levelNo: number): void => {
		this.props.setLevel(levelNo);
	};

	handleHideHintsOverlay = (): void => {
		this.props.hideHintsOverlay();
	};

	handleToggleHints = (): void => {
		this.props.toggleHints();
	};

	onSwipeUp = (): void => {
		this.handleMove("SwipeUp");
	};

	onSwipeDown = (): void => {
		this.handleMove("SwipeDown");
	};

	onSwipeLeft = (): void => {
		this.handleMove("SwipeLeft");
	};

	onSwipeRight = (): void => {
		this.handleMove("SwipeRight");
	};

	onSwipeMove = (position, event): boolean => {
		return true; //to prevent accidental scrolling on swipe
	};

	render() {
		return (
			<div>
				<Swipe
					innerRef={() => {}}
					tolerance={40}
					onSwipeMove={this.onSwipeMove}
					onSwipeUp={this.onSwipeUp.bind(this)}
					onSwipeDown={this.onSwipeDown.bind(this)}
					onSwipeLeft={this.onSwipeLeft.bind(this)}
					onSwipeRight={this.onSwipeRight.bind(this)}
				>
					<div className="swipeable">
						<div className="app">
							<MenuOverlay
								onCloseMenu={this.handleToggleMenu}
								onLevelRestart={this.handleRestartLevel}
								onGameRestart={this.handleRestartGame}
								onSetLevel={this.handleSetLevel}
								onToggleHints={this.handleToggleHints}
							/>
							<Header />
							<Board onMouseClick={this.handleMouseClick} />
							<MenuBar
								onShowMenu={this.handleToggleMenu}
								onLevelRestart={this.handleRestartLevel}
							/>
							<InfoOverlay
								onLevelRestart={this.handleRestartLevel}
								onShowMenu={this.handleToggleMenu}
								onNextLevel={this.handleSetNextLevel}
							/>
							<HintsOverlay onClose={this.handleHideHintsOverlay} />
						</div>
					</div>
				</Swipe>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Game);
