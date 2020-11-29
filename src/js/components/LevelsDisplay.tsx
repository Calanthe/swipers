import React from "react";
import { connect } from "react-redux";
import StarsPoints from "./StarsPoints";

interface Props {
    starScores: Array<number>;
	onSetLevel: (levelNo: number) => void;
}

const mapStateToProps = (state) => {
	return {
        starScores: state.starScores
    };
};

const LevelsDisplay: React.FunctionComponent<Props> = ({
    starScores,
	onSetLevel
}) => {
	return (
        <div className="levels-display">
            <p className="levels-header">Levels</p>
            <div className="level" onClick={() => onSetLevel(0)}>
                <p className="level-no">1</p>
                <StarsPoints level={1} score={starScores[0]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(1)}>
                <p className="level-no">2</p>
                <StarsPoints level={2} score={starScores[1]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(2)}>
                <p className="level-no">3</p>
                <StarsPoints level={3} score={starScores[2]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(3)}>
                <p className="level-no">4</p>
                <StarsPoints level={4} score={starScores[3]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(4)}>
                <p className="level-no">5</p>
                <StarsPoints level={5} score={starScores[4]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(5)}>
                <p className="level-no">6</p>
                <StarsPoints level={6} score={starScores[5]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(6)}>
                <p className="level-no">7</p>
                <StarsPoints level={7} score={starScores[6]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(7)}>
                <p className="level-no">8</p>
                <StarsPoints level={8} score={starScores[7]}/>
            </div>
            <div className="level" onClick={() => onSetLevel(8)}>
                <p className="level-no">9</p>
                <StarsPoints level={9} score={starScores[8]}/>
            </div>
        </div>
	);
};

export default connect(mapStateToProps)(LevelsDisplay);
