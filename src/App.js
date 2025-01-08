import logo from './logo.svg';
import './App.css';
import { FluentThemeProvider, DEFAULT_COMPONENT_ICONS } from '@azure/communication-react';
import { initializeIcons, registerIcons } from '@fluentui/react';
import React from 'react';

// If you don't want to provide custom icons, you can register the default ones included with the library.
// This will ensure that all the icons are rendered correctly.
initializeIcons();
registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

function App() {
  return (
    <FluentThemeProvider>
      <h1>Hooray! You set up Fluent Theme Provider 🎉🎉🎉</h1>
    </FluentThemeProvider>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
