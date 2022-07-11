import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './views/Homepage';

import 'antd/dist/antd.min.css';
import './index.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Homepage /> } />
				</Routes>				
			</BrowserRouter>
		</>
	)
}

export default App;