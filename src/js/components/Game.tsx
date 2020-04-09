import * as React from "react";
import { connect } from "react-redux";
import Board from "./Board"
import Header from "./Header"
import InfoOverlay from "./InfoOverlay"
import { updateCells, setActiveType, restartLevel, setNextLevel } from "../actions/index";

interface GameProps {
    updateCells: typeof updateCells,
    setActiveType: typeof setActiveType,
    restartLevel: typeof restartLevel,
    setNextLevel: typeof setNextLevel
}

interface KeyboardEvent {
    key: string
}

interface MouseEvent {
    target: {
        getAttribute: (attributeName: string) => string
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCells: keyPressedNo => dispatch(updateCells(keyPressedNo)),
        setActiveType: cellType => dispatch(setActiveType(cellType)),
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

    handleMouseClick = (event: MouseEvent): void => {
        this.props.setActiveType(parseInt(event.target.getAttribute('data-type'), 10));
    }

    handleRestartLevel = (): void => {
        this.props.restartLevel();
    }

    handleSetNextLevel = (): void => {
        this.props.setNextLevel();
    }

    render() {
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
