import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { TILE_TYPES } from "../misc/constants";

interface Props {
	score: number;
	singleScore: number;
	level: number;
	moves: number;
	activeType: number;
	scoreClass: string;
}

const mapStateToProps = (state) => {
	return {
		score: state.score,
		singleScore: state.singleScore,
		level: state.level,
		moves: state.moves,
		activeType: state.activeType,
		scoreClass: state.scoreClass,
	};
};

const Header: React.FunctionComponent<Props> = ({
	score,
	singleScore,
	level,
	moves,
	activeType,
	scoreClass,
}) => {
	const logoClass = classNames("logo", "logo-" + TILE_TYPES[activeType]),
		singleScoreClassName = classNames("single-score", scoreClass),
		singleScoreValue = "+" + singleScore,
		levelToShow = level + 1;

	return (
		<div className="header">
			<h1 className={logoClass}>Swipers</h1>
			<div className="score-wrapper">
				<div className="score-unit">
					<p className="score-subheader score">Level</p>
					<p className="score">{levelToShow}</p>
				</div>
				<div className="score-unit">
					<p className="score-subheader score">Moves</p>
					<p className="score">{moves}</p>
				</div>
				<div className="score-unit">
					<p className="score-subheader score">Score</p>
					<p className="score">{score}</p>
					<span className={singleScoreClassName}>{singleScoreValue}</span>
				</div>
				<div className="score-unit">
					<p className="score-subheader score">Best</p>
					<p className="score">{score}</p>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Header);
