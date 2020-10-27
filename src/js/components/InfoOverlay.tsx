import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

interface Props {
	isLevelFinished: boolean;
	isGameFinished: boolean;
	moves: number;
	onLevelRestart: () => void;
	onGameRestart: () => void;
	onNextLevel: () => void;
}

const mapStateToProps = (state) => {
	return {
		isLevelFinished: state.isLevelFinished,
		isGameFinished: state.isGameFinished,
		moves: state.moves,
	};
};

const InfoOverlay: React.FunctionComponent<Props> = ({
	isLevelFinished,
	isGameFinished,
	moves,
	onLevelRestart,
	onGameRestart,
	onNextLevel,
}) => {
	const infoOverlayClass = classNames("info-overlay", {
			visible: isLevelFinished,
		}),
		infoOverlayWrapperClass = classNames("info-overlay-wrapper", {
			visible: isLevelFinished,
		});

	return (
		<div>
			<div className={infoOverlayWrapperClass}></div>
			<div className={infoOverlayClass}>
				<h1 className="title">Congratulations!</h1>
				<div className="text">
					{isGameFinished ? (
						<p>You finished the game :D</p>
					) : (
						<p>
							Level completed in just {moves} {moves > 1 ? "moves" : "move"} :)
						</p>
					)}
				</div>
				<div>
					<button className="button restart" onClick={onLevelRestart}>
						Restart level
					</button>
					{isGameFinished ? (
						<button className="button next" onClick={onGameRestart}>
							Restart game
						</button>
					) : (
						<button className="button next" onClick={onNextLevel}>
							Next level
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(InfoOverlay);
