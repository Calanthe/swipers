import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import { TILE_TYPES } from "../misc/constants";

interface Props {
    score: number,
    level: number,
    moves: number,
    activeType: number,
    scoreClass: string
}

const mapStateToProps = state => {
    return {
        score: state.score,
        level: state.level,
        moves: state.moves,
        activeType: state.activeType,
        scoreClass: state.scoreClass
    };
};

const Header: React.FunctionComponent<Props> = ({ score, level, moves, activeType, scoreClass }) => {
    const
        headerClass = classNames('header header-type-', TILE_TYPES[activeType]),
        scoreClassName = classNames('score', scoreClass),
        levelToShow = level + 1;

    return (
        <div className={headerClass}>
            <h1 className="title">Swipers</h1>
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
                    <p className={scoreClassName}>{score}</p>
                </div>
                <div className="score-unit">
                    <p className="score-subheader score">Best</p>
                    <p className="score">{score}</p>
                </div>

            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header);
