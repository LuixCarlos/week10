import React from 'react';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import GlobalsStyles from './styles/global';

const App = () => (
  <div id="app">
    <Home />
    <GlobalsStyles />
    <ToastContainer/>
  </div>
);

export default App;
