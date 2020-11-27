import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

interface Props {
	isLevelFinished: boolean;
	isGameFinished: boolean;
	moves: number;
	starScore: number;
	level: number,
	onLevelRestart: () => void;
	onGameRestart: () => void;
	onNextLevel: () => void;
}

const mapStateToProps = (state) => {
	return {
		isLevelFinished: state.isLevelFinished,
		isGameFinished: state.isGameFinished,
		moves: state.moves,
		starScore: state.starScore,
		level: state.level
	};
};

const InfoOverlay: React.FunctionComponent<Props> = ({
	isLevelFinished,
	isGameFinished,
	moves,
	starScore,
	level,
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
//TODO move it to a separate component
	let i = 0,
		totalStarsAmount = 3,
		uniqueKey = "",
		stars = [];

	for (i = 1; i <= totalStarsAmount; i++) {
		uniqueKey = `star_${level}_${i}`;
		if (i <= starScore) {
			stars.push(<i className="far fa-star" key={uniqueKey}></i>);
		} else {
			stars.push(<i className="fas fa-star" key={uniqueKey}></i>);
		}
	}

	return (
		<div>
			<div className={infoOverlayWrapperClass}></div>
			<div className={infoOverlayClass}>
				<p className="title">Congratulations!</p>
				<div className="text">
					{isGameFinished ? (
						<p>
							You just finished the game!<br/>
							Now try to collect all the stars :)
						</p>
					) : (
						<div>
							Level completed in {moves} {moves > 1 ? "moves" : "move"}!
							<div>
								{stars}
							</div>
						</div>
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
