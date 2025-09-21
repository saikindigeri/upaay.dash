import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import store from './redux/store';
import Board from './components/Board';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Board />
      </ThemeProvider>
    </Provider>
  );
}

export default App;