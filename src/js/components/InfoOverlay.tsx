import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';

interface Props {
    isLevelFinished: boolean
}

const mapStateToProps = state => {
    return {
        isLevelFinished: state.isLevelFinished
    };
};

// TODO use this component to show level introductions too
const InfoOverlay: React.FunctionComponent<Props> = ({ isLevelFinished }) => {
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
                    <button>Restart</button>
                    <button>Next level</button>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(InfoOverlay);
