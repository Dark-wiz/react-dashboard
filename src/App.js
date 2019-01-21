import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootreducer from './store/reducers/Rootreducer'


const store = createStore(rootreducer)

class App extends Component{
  render(){
    return (
      <Provider store ={store}> 
        <Router/>
      </Provider>
    )
  }
}

export default App
