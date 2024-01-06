import React from "react";
import { Provider } from "./AppContext";

import Form from "./Components/Form";

import "./SCSS/App.scss";

const App = () => {
	return (
		<Provider>
      <Form />
		</Provider>
	);
};

export default App;