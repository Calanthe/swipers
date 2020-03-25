import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import { TILE_TYPES } from "../constants";

interface Props {
    score: number,
    activeType: number,
    scoreClass: string
}

const mapStateToProps = state => {
    return {
        score: state.score,
        activeType: state.activeType,
        scoreClass: state.scoreClass
    };
};

const Header: React.FunctionComponent<Props> = ({ score, activeType, scoreClass }) => {
    const headerClass = classNames('header header-type-', TILE_TYPES[activeType]);

    return (
        <div className={headerClass}>
            <h1 className="title">Swipers</h1>
            <div className="score">
                <p>Points: <span className={scoreClass}>{score}</span></p>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header);
