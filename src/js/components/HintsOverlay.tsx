import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import Overlay from "./Overlay";

interface Props {
	hint: string;
	isHintsVisible: boolean;
    isHintsOverlayVisible: boolean;
	onClose: () => void;
}

const mapStateToProps = (state) => {
	return {
		hint: state.levelData.hint,
		isHintsVisible: state.isHintsVisible,
        isHintsOverlayVisible: state.isHintsOverlayVisible,
	};
};

const HintsOverlay: React.FunctionComponent<Props> = ({
	hint,
	isHintsVisible,
    isHintsOverlayVisible,
	onClose
}) => {
	const hintsOverlayClass = classNames("info-overlay", {
			visible: (hint && isHintsOverlayVisible && isHintsVisible) ? true : false,
		}),
		hintsOverlayWrapperClass = classNames("info-overlay-wrapper", {
			visible: (hint && isHintsOverlayVisible && isHintsVisible) ? true : false,
		});

	return (
		<Overlay 
			overlayClass={hintsOverlayClass} 
			overlayWrapperClass={hintsOverlayWrapperClass}
			title="Hint"
			text={hint}
			buttons=
				{
					<button className="info-overlay__single-btn button" onClick={onClose}>
						OK!
					</button>
				}
		/>
	);
};

export default connect(mapStateToProps)(HintsOverlay);
