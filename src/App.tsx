import React from 'react';
import './App.css';
import { StoreContext } from 'storeon/react';
import store from './store/index';
import AppCore from './modules/core/components/AppCore/AppCore';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <AppCore />
    </StoreContext.Provider>
  );
}

export default App;
