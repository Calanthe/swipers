import React from "react";
import { connect } from "react-redux";
import StarsPoints from "./StarsPoints";

interface Props {
    starScores: Array<number>;
	onSetLevel: (levelNo: number) => void;
}

interface LevelProps {
    level: number;
    score: number;
	onSetLevel: (levelNo: number) => void;
}

const Level: React.FunctionComponent<LevelProps> = ({
    level,
    score,
    onSetLevel
}) => {
    return (
        <button className="levels__single-level" onClick={() => onSetLevel(level - 1)}>
            <p className="levels__level-no">{level}</p>
            <StarsPoints level={level} score={score}/>
        </button>
    );
};

const mapStateToProps = (state) => {
	return {
        starScores: state.starScores
    };
};

const LevelsDisplay: React.FunctionComponent<Props> = ({
    starScores,
	onSetLevel
}) => {
    let i: number,
        uniqueKey = "",
        levels = [];

    for (i = 0; i < 9; i++) {
        uniqueKey = `level_${i}`;
        levels.push(
            <Level level={i + 1} key={uniqueKey} score={starScores[i]} onSetLevel={onSetLevel}/>
        );
    }
    
	return (
        <div className="levels">
            <p className="levels__header">Levels</p>
            {levels}
        </div>
	);
};

export default connect(mapStateToProps)(LevelsDisplay);
