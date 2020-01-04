import * as React from "react";
import { connect } from "react-redux";
import Board from "./Board"
import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants";
import { updateCells } from "../actions/index";

interface GameProps {
    updateCells: typeof updateCells;
}

interface KeyboardEvent {
    key: string;
}

export class Block extends React.Component {
    render() {
        return (
            <div className="block"/>
        );
    }
}

export class Grid extends React.Component {
    render() {
        let i,
            j,
            uniqueKey = '',
            blocks = [];

        for (i = 0; i < BOARD_WIDTH; i++) {
            for (j = 0; j < BOARD_HEIGHT; j++) {
                uniqueKey = i + ' ' +j;
                blocks.push(<Block key={uniqueKey}/>)
            }
        }

        return (
            <div className="board">
                {blocks}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCells: cells => dispatch(updateCells(cells))
    };
};

class Game extends React.Component<GameProps> {
    componentDidMount() {
        document.addEventListener("keydown", (event) => {
            this.handleKeyPress(event)
        });
    }

    handleKeyPress = (event: KeyboardEvent): void => {
        var KeyPressMap = {
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

        // TODO R key restarts the game
        // if (!modifiers && event.which === 82) {
        //   self.restart.call(self, event);
        // }
    }

    render() {
        return (
            <div className="app">
                <div>
                    <h1>Swipers!</h1>
                </div>

                <div className="game">
                    <Grid/>
                    <Board/>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Game);
