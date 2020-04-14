import * as React from "react";
import { connect } from "react-redux";
import Board from "./Board"
import Header from "./Header"
import InfoOverlay from "./InfoOverlay"
import { updateCells, setActiveType, restartLevel, setNextLevel } from "../actions/index";
import { Cell } from "../misc/tsTypes";

interface GameProps {
    updateCells: typeof updateCells,
    setActiveType: typeof setActiveType,
    restartLevel: typeof restartLevel,
    setNextLevel: typeof setNextLevel
}

interface KeyboardEvent {
    key: string
}

const mapDispatchToProps = dispatch => {
    return {
        updateCells: keyPressedNo => dispatch(updateCells(keyPressedNo)),
        setActiveType: cell => dispatch(setActiveType(cell)),
        restartLevel: () => dispatch(restartLevel()),
        setNextLevel: () => dispatch(setNextLevel())
    };
};

class Game extends React.Component<GameProps> {
    componentDidMount() {
        document.addEventListener("keydown", (event) => {
            this.handleKeyPress(event)
        });
    }

    handleKeyPress = (event: KeyboardEvent): void => {
        const KeyPressMap = {
            'ArrowUp': 1,
            'ArrowRight': 2,
            'ArrowDown': 3,
            'ArrowLeft': 4,
            'w': 1, // W
            'd': 2, // D
            's': 3, // S
            'a': 4  // A
        };

        if (KeyPressMap[event.key]) {
            this.props.updateCells(KeyPressMap[event.key]);
        }
    }

    handleMouseClick = (cell: Cell): void => {
        this.props.setActiveType(cell);
    }

    handleRestartLevel = (): void => {
        this.props.restartLevel();
    }

    handleSetNextLevel = (): void => {
        this.props.setNextLevel();
    }

    render() { //TODO add overlay which slide down from the top with tip about the current level, add reset lvl btn
        return (
            <div className="app">
                <Header/>
                <Board onMouseClick={this.handleMouseClick}/>
                <InfoOverlay onRestart={this.handleRestartLevel} onNextLevel={this.handleSetNextLevel}/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Game);
