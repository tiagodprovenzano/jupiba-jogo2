import React, {Component} from 'react';
import ReactDOM from 'react-dom';   
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import './index.css';
import SelecionarCategoria from './components/SelecionarCategoria'
import reducers from './reducers/index.js'

class Index extends Component {
 render(){
    return(
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <SelecionarCategoria/>
        </Provider>
        )}
}



ReactDOM.render(<Index />, document.getElementById('root'));
