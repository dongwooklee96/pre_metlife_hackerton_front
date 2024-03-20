import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './store/store';
import { login } from './store/modules/user';

function App() {
  const dispatch = useAppDispatch();
  const setToken = () => {
    dispatch(login({ accessToken: 'sampleToken' }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setToken}>로컬스토리지에 토큰 저장</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
}

export default App;
