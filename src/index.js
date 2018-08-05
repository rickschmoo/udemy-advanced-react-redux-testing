import React from 'react';
import ReactDOM from 'react-dom';

// setup redux in Root so can get reused by enzyme
import Root from 'Root';

import App from 'components/App';

ReactDOM.render(

	<Root>
		<App />
	</Root>,
	document.querySelector('#root')
);