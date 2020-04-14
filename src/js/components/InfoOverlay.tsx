import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';

interface Props {
    isLevelFinished: boolean,
    isGameFinished: boolean,
    onRestart: () => void,
    onNextLevel: () => void,
};

const mapStateToProps = state => {
    return {
        isLevelFinished: state.isLevelFinished,
        isGameFinished: state.isGameFinished
    };
};

const InfoOverlay: React.FunctionComponent<Props> = ({ isLevelFinished, isGameFinished, onRestart, onNextLevel }) => {
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
                    {isGameFinished
                        ? <p>You finished the game!</p>
                        : <p>Level completed!</p>
                    }
                </div>
                <div>
                    <button onClick={onRestart}>Restart level</button>
                    {isGameFinished
                        ? null
                        : <button onClick={onNextLevel}>Next level</button>
                    }
                </div>
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(InfoOverlay);
