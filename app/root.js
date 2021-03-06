import React from 'react'
import { Provider } from 'react-redux'
import App from './containers/app.js'
import configureStore from './store/configureStore';
const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default Root;
