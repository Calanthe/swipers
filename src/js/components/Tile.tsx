import React, { useState, useEffect } from 'react'; // tODO do I need useState here?

//this is not a stateless component ;(
//TODO convert to fn and use hooks, state in render and componentDidUpdate as a sideeffects?
// class Tile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tileClassName: this.props.tileClassName //TODO this should be calculated here not in Grid
//         }
//     }
//
//     componentDidUpdate() {
//         if (this.props.tileClassName) {
//             requestAnimationFrame(() => {
//                 this.setState({
//                     tileClassName: this.props.tileClassName
//                 });
//             })
//         }
//     }
//
//     render() {
//         return <div className={this.state.tileClassName}/>
//     }
// }

// a functionnal component will works exactly like a class component with only a render method,
// every time any props changes the method is called to produce a new rendered tree
// no componentDidUpdate and other life cycle functions:/
const Tile = () => {
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    });

    // return (
    //     <div className={props.tileClassName}/>
    // )

    return <div>inside tile</div>
}

export default Tile
