import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import LevelsDisplay from "./LevelsDisplay";

interface Props {
    isMenuVisible: boolean;
    level: number;
    onCloseMenu: () => void;
	onLevelRestart: () => void;
	onGameRestart: () => void;
}

const mapStateToProps = (state) => {
	return {
        isMenuVisible: state.isMenuVisible,
        level: state.level
	};
};

const MenuOverlay: React.FunctionComponent<Props> = ({
    isMenuVisible,
    level,
    onCloseMenu,
	onLevelRestart,
	onGameRestart
}) => {
	const menuOverlayClass = classNames("menu-overlay", {
			visible: isMenuVisible,
		});

	return (
        <div className={menuOverlayClass}>
            <h1 className="logo">Swipers</h1>
            <div className="content-wrapper">
                {level > 0 ? (
                    <button className="button" onClick={onCloseMenu}>
                        <i className="fas fa-long-arrow-alt-left"></i> Back to game
                    </button>
                ) : (
                    <button className="button" onClick={onGameRestart}>
                        New game
                    </button>
				)}     
                <button className="button" onClick={onLevelRestart}>
                    <i className="fas fa-undo"></i> Restart level
                </button>
                {level > 0 ? (
                    <button className="button" onClick={onGameRestart}>
                        New game
                    </button>
				) : null}
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
