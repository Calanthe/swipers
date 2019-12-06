import * as React from "react";
import { connect } from "react-redux";
//TODO make it work https://www.npmjs.com/package/react-easy-swipe
// import Grid from "./Grid"
import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants";

import { updateCells } from "../actions/index";

interface GameProps {
  updateCells: any; //todo is this correct?
}

export class Block extends React.Component {
    render() {
        return (
            <div className="block"/>
        );
    }
}

export class Board extends React.Component {
    //do I need all those div elements? maybe just a cross bg made in css only?
    render() {
        let i,
            j,
            blocks = [];

        for (i = 0; i < BOARD_WIDTH; i++) {
            for (j = 0; j < BOARD_HEIGHT; j++) {
                blocks.push(<Block/>)
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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("keydown", (event) => {
            this.handleKeyPress(event)
        });
    }

    handleKeyPress = (event) => {
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
        //TODO switch Board with Grid
        // return (
        //     <div className="app">
        //         <div>
        //             <h1>Swipers!</h1>
        //         </div>
        //
        //         <div className="game">
        //             <Board state={this.state}/>
        //             <Grid/>
        //         </div>
        //     </div>
        // );
        return (
            <div>
              <h1>Swipers!</h1>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Game);
