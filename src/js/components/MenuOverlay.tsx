import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import LevelsDisplay from "./LevelsDisplay";

interface Props {
    isMenuVisible: boolean;
    level: number;
    moves: number;
    onCloseMenu: () => void;
	onLevelRestart: () => void;
    onGameRestart: () => void;
    onSetLevel: (levelNo: number) => void;
    onToggleHints: () => void;
}

const mapStateToProps = (state) => {
	return {
        isMenuVisible: state.isMenuVisible,
        level: state.level,
        moves: state.moves,
        isHintsVisible: state.isHintsVisible
	};
};

const MenuOverlay: React.FunctionComponent<Props> = ({
    isMenuVisible,
    level,
    moves,
    onCloseMenu,
	onLevelRestart,
    onGameRestart,
    onSetLevel,
    onToggleHints
}) => {
	const menuOverlayClass = classNames("menu-overlay", {
			visible: isMenuVisible,
		});

	return (
        <div className={menuOverlayClass}>
            <h1 className="logo">Swipers</h1>
            <div className="content-wrapper">
                {level > 0 || moves > 0 ? (
                    <p>
                        <button className="button" onClick={onCloseMenu}>
                            <i className="fas fa-long-arrow-alt-left"></i> Back to game
                        </button>
                        <button className="button" onClick={onLevelRestart}>
                            <i className="fas fa-undo"></i> Restart level
                        </button>
                    </p>
                ) : (
                    <button className="button" onClick={onGameRestart}>
                        New game
                    </button>
				)}
                {level > 0 || moves > 0 ? (
                    <button className="button" onClick={onGameRestart}>
                        New game
                    </button>
				) : null}

                <button className="button hints" onClick={onToggleHints}>
                    <span>Turn off hints</span> 
                    <i className="fas fa-toggle-on"></i>
                </button>
                <button className="button hints" onClick={onToggleHints}>
                    <span>Turn on hints</span> 
                    <i className="fas fa-toggle-off"></i>
                </button>
                <LevelsDisplay onSetLevel={onSetLevel}/>
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
