import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import LevelsDisplay from "./LevelsDisplay";

interface Props {
    isMenuVisible: boolean;
    onCloseMenu: () => void;
	onLevelRestart: () => void;
	onGameRestart: () => void;
}

const mapStateToProps = (state) => {
	return {
		isMenuVisible: state.isMenuVisible
	};
};

const MenuOverlay: React.FunctionComponent<Props> = ({
    isMenuVisible,
    onCloseMenu,
	onLevelRestart,
	onGameRestart
}) => {
	const menuOverlayClass = classNames("menu-overlay", {
			visible: isMenuVisible,
		});

	return (
        <div className={menuOverlayClass}>
            <div className="content-wrapper">
                <button className="button restart" onClick={onCloseMenu}>
                    <i className="fas fa-long-arrow-alt-left"></i> Back to game
                </button>
                <button className="button restart" onClick={onLevelRestart}>
                    <i className="fas fa-undo"></i> Restart level
                </button>
                <button className="button next" onClick={onGameRestart}>
                    New game
                </button>
                <LevelsDisplay/>
            </div>
            <p className="credits">
                © 2020 <a href="http://zofiakorcz.pl" className="credits-link" target="_blank" rel="noopener noreferrer">
                    Zofia Korcz
                </a>
            </p>
        </div>
	);
};

export default connect(mapStateToProps)(MenuOverlay);
