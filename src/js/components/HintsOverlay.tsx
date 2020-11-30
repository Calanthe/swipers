import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

interface Props {
    hint: string;
    isHintsVisible: boolean;
	onClose: () => void;
}

const mapStateToProps = (state) => {
	return {
        hint: state.hint,
        isHintsVisible: state.isHintsVisible,
	};
};

const HintsOverlay: React.FunctionComponent<Props> = ({
    hint,
    isHintsVisible,
	onClose
}) => {
	const hintsOverlayClass = classNames("info-overlay", {
			visible: (hint && isHintsVisible) ? true : false,
		}),
		hintsOverlayWrapperClass = classNames("info-overlay-wrapper", {
			visible: (hint && isHintsVisible) ? true : false,
		});

	return (
		<div>
			<div className={hintsOverlayWrapperClass}></div>
			<div className={hintsOverlayClass}>
				<p className="title">Hint</p>
				<div className="text">
					{hint}
				</div>
				<div className="buttons-wrapper">
					<button className="button" onClick={onClose}>
                        OK!
					</button>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(HintsOverlay);
