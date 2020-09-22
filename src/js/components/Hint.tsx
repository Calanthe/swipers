import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

interface Props {
	hint: string;
	onLevelRestart: () => void;
	onGameRestart: () => void;
}

const mapStateToProps = (state) => {
	return {
		hint: state.hint,
	};
};

const Hint: React.FunctionComponent<Props> = ({
	hint,
	onLevelRestart,
	onGameRestart,
}) => {
	return (
		<div className="hint">
			<p>{hint}</p>
			<div className="buttons">
				<button className="button restart" onClick={onGameRestart}>
					Restart game
				</button>
				<button className="button next" onClick={onLevelRestart}>
					Restart level
				</button>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Hint);
