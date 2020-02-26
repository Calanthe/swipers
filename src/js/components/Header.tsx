import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";

interface Props {
    score: number
}

const mapStateToProps = state => {
    return {
        score: state.score
    };
};

const Header: React.FunctionComponent<Props> = ({ score }) => {
    return (
        <div className="header">
            <h1>Swipers!</h1>
            <div className="score">
                <span>{score}</span>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header);
