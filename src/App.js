import React from 'react';
import './App.css';
//import Cart from './components/Cart'
import ConnectedCont from './containers/ConnectedCont'
import ConnectedCart from './containers/ConnectedCart'

const App = () => (
  <div>
    <ConnectedCart />
    <ConnectedCont />
  </div>
)
export default App;
