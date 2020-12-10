import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { TILE_TYPES } from "../misc/constants";

interface Props {
	score: number;
	singleScore: number;
	maxScores: number;
	level: number;
	moves: number;
	activeType: number;
	scoreClass: string;
}

const mapStateToProps = (state) => {
	return {
		score: state.levelData.score,
		singleScore: state.levelData.singleScore,
		maxScores: state.maxScores,
		level: state.levelData.level,
		moves: state.levelData.moves,
		activeType: state.levelData.activeType,
		scoreClass: state.levelData.scoreClass,
	};
};

const Header: React.FunctionComponent<Props> = ({
	score,
	singleScore,
	maxScores,
	level,
	moves,
	activeType,
	scoreClass,
}) => {
	const logoClass = classNames("logo", "logo-" + TILE_TYPES[activeType]),
		singleScoreClassName = classNames("header__single-score", scoreClass),
		singleScoreValue = "+" + singleScore,
		bestScore = maxScores[level],
		levelToShow = level + 1;

	return (
		<div className="header">
			<h1 className={logoClass}>Swipers</h1>
			<div className="header__score-wrapper">
				<div className="header__score-unit">
					<p className="header__score-subheader header__score">Level</p>
					<p className="header__score">{levelToShow}</p>
				</div>
				<div className="header__score-unit">
					<p className="header__score-subheader header__score">Moves</p>
					<p className="header__score">{moves}</p>
				</div>
				<div className="header__score-unit">
					<p className="header__score-subheader header__score">Score</p>
					<p className="header__score">{score}</p>
					<span className={singleScoreClassName}>{singleScoreValue}</span>
				</div>
				<div className="header__score-unit">
					<p className="header__score-subheader header__score">Best</p>
					<p className="header__score">{bestScore}</p>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Header);
