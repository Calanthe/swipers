import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import StarsPoints from "./StarsPoints";

interface Props {
	isLevelFinished: boolean;
	isGameFinished: boolean;
	starScores: Array<number>;
	level: number
	moves: number;
	onLevelRestart: () => void;
	onGameRestart: () => void;
	onNextLevel: () => void;
}

const mapStateToProps = (state) => {
	return {
		isLevelFinished: state.isLevelFinished,
		isGameFinished: state.isGameFinished,
		starScores: state.starScores,
		level: state.level,
		moves: state.moves,
	};
};

const InfoOverlay: React.FunctionComponent<Props> = ({
	isLevelFinished,
	isGameFinished,
	starScores,
	level,
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
		}),
		starScore = starScores[level];

	return (
		<div>
			<div className={infoOverlayWrapperClass}></div>
			<div className={infoOverlayClass}>
				<p className="title">Congratulations!</p>
				<div className="text">
					<div>
						<p className="info">
							Level {level + 1} completed!
						</p>
						<StarsPoints level={level} score={starScore} customCssClass={'stars-points'}/>
					</div>
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
