import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import Overlay from "./Overlay";

interface Props {
	hint: string;
	isHintsVisible: boolean;
	isHintsOverlayVisible: boolean;
	isMenuVisible: boolean;
	onClose: () => void;
}

const mapStateToProps = (state) => {
	return {
		hint: state.levelData.hint,
		isHintsVisible: state.isHintsVisible,
		isHintsOverlayVisible: state.isHintsOverlayVisible,
		isMenuVisible: state.isMenuVisible
	};
};

const HintsOverlay: React.FunctionComponent<Props> = ({
	hint,
	isHintsVisible,
	isHintsOverlayVisible,
	isMenuVisible,
	onClose
}) => {
	const hintsOverlayClass = classNames("overlay", {
			visible: (hint && isHintsOverlayVisible && isHintsVisible && !isMenuVisible) ? true : false,
		}),
		hintsOverlayWrapperClass = classNames("overlay-wrapper", {
			visible: (hint && isHintsOverlayVisible && isHintsVisible && !isMenuVisible) ? true : false,
		});

	return (
		<Overlay 
			overlayClass={hintsOverlayClass} 
			overlayWrapperClass={hintsOverlayWrapperClass}
			title="Hint"
			text={hint}
			buttons=
				{
					<button className="overlay__single-btn button" onClick={onClose}>
						OK!
					</button>
				}
		/>
	);
};

export default connect(mapStateToProps)(HintsOverlay);
