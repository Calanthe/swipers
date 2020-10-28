import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

interface Props {
	isMenuVisible: boolean;
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
	onLevelRestart,
	onGameRestart
}) => {
	const menuOverlayClass = classNames("menu-overlay", {
			visible: isMenuVisible,
		});

	return (
		<div>
			<div className={menuOverlayClass}>
				<div className="content-wrapper">
					<button className="button restart" onClick={onLevelRestart}>
                        <i className="fas fa-long-arrow-alt-left"></i> Back to game
					</button>
                    <button className="button restart" onClick={onLevelRestart}>
                        <i className="fas fa-undo"></i> Restart level
					</button>
                    <button className="button next" onClick={onGameRestart}>
                        New game
                    </button>
                    <div className="levels-display">
                        <p className="levels-header">Levels</p>
                        <div className="level">
                            <p className="level-no">1</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">2</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">3</p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">4</p>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">5</p>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">6</p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">7</p>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">8</p>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="level">
                            <p className="level-no">9</p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
				    </div>
				</div>
                <p className="credits">
                    © 2020 made by <a href="http://zofiakorcz.pl" className="credits-link" target="_blank">
                        Zofia Korcz
                    </a>
                </p>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(MenuOverlay);
