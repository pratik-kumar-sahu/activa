import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { makeServer } from './server';
import { VideoContextProvider } from './state/contexts';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<VideoContextProvider>
				<App />
			</VideoContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
