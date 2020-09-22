import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./js/reducers";
import Game from "./js/components/Game";

const store = createStore(reducers);

function App() {
	return (
		<div>
			<Provider store={store}>
				<Game />
			</Provider>
		</div>
	);
}

export default App;
