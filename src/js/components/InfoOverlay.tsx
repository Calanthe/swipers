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
				<p className="title">Congratulations!</p>
				<div className="text">
					{isGameFinished ? (
						<p>You finished the game :D</p>
					) : (
						<p>
							Level completed in {moves} {moves > 1 ? "moves" : "move"}!
						</p>
					)}
				</div>
				<div className="buttons-wrapper">
					<button className="button" onClick={onLevelRestart}>
						<i className="fas fa-undo"></i> Restart
					</button>
					{isGameFinished ? (
						<button className="button" onClick={onGameRestart}>
							Restart game
						</button>
					) : (
						<button className="button" onClick={onNextLevel}>
							Next <i className="fas fa-arrow-right"></i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(InfoOverlay);
