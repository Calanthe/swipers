import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

interface Props {
	onSetLevel: () => void;
}

const mapStateToProps = (state) => {
	return {};
};

const LevelsDisplay: React.FunctionComponent<Props> = ({
	onSetLevel
}) => {
	return (
        <div className="levels-display">
            <p className="levels-header">Levels</p>
            <div className="level">
                <p className="level-no">1</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">2</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">3</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">4</p>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">5</p>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">6</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">7</p>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">8</p>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="level">
                <p className="level-no">9</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        </div>
	);
};

export default connect(mapStateToProps)(LevelsDisplay);
