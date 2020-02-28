import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import { BOARD_WIDTH, BOARD_HEIGHT, FINISH_POSITION_X, FINISH_POSITION_Y, TILE_TYPES } from "../constants";

interface Props {
    score: number,
    activeType: number
}

const mapStateToProps = state => {
    return {
        score: state.score,
        activeType: state.activeType
    };
};

const Header: React.FunctionComponent<Props> = ({ score, activeType }) => {
    const headerClass = "header header-type-" + TILE_TYPES[activeType];

    return (
        <div className={headerClass}>
            <h1 className="title">Swipers</h1>
            <div className="score">
                <span>Points: {score}</span>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header);
