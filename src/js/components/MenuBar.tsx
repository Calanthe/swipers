import React from "react";

interface Props {
	onLevelRestart: () => void;
	onShowMenu: () => void;
}

const MenuBar: React.FunctionComponent<Props> = ({
	onLevelRestart,
	onShowMenu,
}) => {
	return (
		<div className="menu-bar">
            <button className="button-link menu" onClick={onShowMenu}>
                <i className="fas fa-bars"></i> Menu
            </button>
            <button className="button-link restart" onClick={onLevelRestart}>
                <i className="fas fa-undo"></i> Reset
            </button>
		</div>
	);
};

export default MenuBar;
