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
        levelToShow = level + 1;

    return (
        <div className={headerClass}>
            <h1 className="title">Swipers</h1>
            <div className="score">
                <div>Score: <span className={scoreClass}>{score}</span></div>
                <div>Best: <span className={scoreClass}>{score}</span></div>
                <div>Level: <span className="">{levelToShow}</span></div>
                <div>Moves: <span className="">{moves}</span></div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header);
