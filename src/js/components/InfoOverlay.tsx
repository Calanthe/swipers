import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';

interface Props {
    isLevelFinished: boolean,
    onRestart: () => void,
    onNextLevel: () => void,
};

const mapStateToProps = state => {
    return {
        isLevelFinished: state.isLevelFinished
    };
};

const InfoOverlay: React.FunctionComponent<Props> = ({ isLevelFinished, onRestart, onNextLevel }) => {
    const
        infoOverlayClass = classNames('info-overlay', { 'visible': isLevelFinished }),
        infoOverlayWrapperClass = classNames('info-overlay-wrapper', { 'visible': isLevelFinished });

    return (
        <div>
            <div className={infoOverlayWrapperClass}>
            </div>
            <div className={infoOverlayClass}>
                <h1 className="title">Congratulations :)</h1>
                <div>
                    <p>Level completed!</p>
                </div>
                <div>
                    <button onClick={onRestart}>Restart</button>
                    <button onClick={onNextLevel}>Next level</button>
                </div>
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(InfoOverlay);
