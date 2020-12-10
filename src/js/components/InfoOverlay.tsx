import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import StarsPoints from "./StarsPoints";
import Overlay from "./Overlay";

interface Props {
	isLevelFinished: boolean;
	isGameFinished: boolean;
	starScores: Array<number>;
	level: number
	moves: number;
	score: number;
	isNewBestScore: boolean;
	onLevelRestart: () => void;
	onGameRestart: () => void;
	onNextLevel: () => void;
}

const mapStateToProps = (state) => {
	return {
		isLevelFinished: state.levelData.isLevelFinished,
		isGameFinished: state.levelData.isLevelFinisGameFinishedished,
		starScores: state.starScores,
		level: state.levelData.level,
		moves: state.levelData.moves,
		score: state.levelData.score,
		isNewBestScore: state.levelData.isNewBestScore,
	};
};

const InfoOverlay: React.FunctionComponent<Props> = ({
	isLevelFinished,
	isGameFinished,
	starScores,
	level,
	moves,
	score,
	isNewBestScore,
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
		scoreClass = classNames("score-title", {
			best: isNewBestScore,
		}),
		starScore = starScores[level];

	return (
		<Overlay 
			overlayClass={infoOverlayClass} 
			overlayWrapperClass={infoOverlayWrapperClass}
			title="Congratulations!"
			text={
				<div>
					<p className="info">
						Level {level + 1} completed!
					</p>
					<div className="score-info">
						<div className={scoreClass}>Score:</div> 
						<div className="score-value">{score}</div>
					</div>
					<div className="score-info">
						<div className="score-title">Moves:</div> 
						<div className="score-value">{moves}</div>
					</div>
					<div className="line"></div>
					<StarsPoints level={level} score={starScore} customCssClass={'stars-points'}/>
				</div>
			}
			buttons=
				{
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
				}
		/>
	);
};

export default connect(mapStateToProps)(InfoOverlay);
