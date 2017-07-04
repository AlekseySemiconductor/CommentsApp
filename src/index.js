import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import CommentsApp from './components/CommentsApp.jsx';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	// console.log('subscribe', store.getState());
});

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<CommentsApp />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(CommentsApp);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/CommentsApp.jsx', () => {
		render(CommentsApp)
	});
}