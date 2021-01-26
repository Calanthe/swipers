import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import LevelsDisplay from "./LevelsDisplay";

interface Props {
	isMenuVisible: boolean;
	level: number;
	moves: number;
	isHintsVisible: boolean;
	onCloseMenu: () => void;
	onLevelRestart: () => void;
	onGameRestart: () => void;
	onSetLevel: (levelNo: number) => void;
	onToggleHints: () => void;
}

const mapStateToProps = (state) => {
	return {
		isMenuVisible: state.isMenuVisible,
		level: state.levelData.level,
		moves: state.levelData.moves,
		isHintsVisible: state.isHintsVisible,
	};
};

const MenuOverlay: React.FunctionComponent<Props> = ({
	isMenuVisible,
	level,
	moves,
	isHintsVisible,
	onCloseMenu,
	onLevelRestart,
	onGameRestart,
	onSetLevel,
	onToggleHints,
}) => {
	const menuOverlayClass = classNames("menu-overlay-wrapper", {
		visible: isMenuVisible,
	});

	return (
		<div className={menuOverlayClass}>
			<div className="menu-overlay">
				<h1 className="menu-overlay__logo logo">Swipers</h1>
				<div className="menu-overlay__content-wrapper">
					{level > 0 || moves > 0 ? (
						<p>
							<button
								className="menu-overlay__button button"
								onClick={onCloseMenu}
							>
								<i className="fas fa-long-arrow-alt-left"></i> Back to game
							</button>
							<button
								className="menu-overlay__button button"
								onClick={onLevelRestart}
							>
								<i className="fas fa-undo"></i> Restart level
							</button>
						</p>
					) : (
						<button
							className="menu-overlay__button button"
							onClick={onGameRestart}
						>
							New game
						</button>
					)}
					{level > 0 || moves > 0 ? (
						<div>
							<button
								className="menu-overlay__button button"
								onClick={onGameRestart}
							>
								New game
							</button>
							{isHintsVisible ? (
								<button
									className="menu-overlay__button menu-overlay__hints button"
									onClick={onToggleHints}
								>
									<span>Turn off tutorial</span>
									<i className="fas fa-toggle-on"></i>
								</button>
							) : (
								<button
									className="menu-overlay__button menu-overlay__hints button"
									onClick={onToggleHints}
								>
									<span>Turn on tutorial</span>
									<i className="fas fa-toggle-off"></i>
								</button>
							)}
						</div>
					) : null}
					<LevelsDisplay onSetLevel={onSetLevel} />
				</div>
				<p className="menu-overlay__credits">
					© 2020{" "}
					<a
						href="http://zofiakorcz.pl"
						className="menu-overlay__credits-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Zofia Korcz
					</a>
					<br />
					<a
						className="github-button"
						href="https://github.com/Calanthe/swipers/"
						data-color-scheme="no-preference: light; light: light; dark: light;"
						data-size="large"
						aria-label="View Calanthe/swipers on Github"
					>
						View on Github
					</a>
				</p>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(MenuOverlay);
