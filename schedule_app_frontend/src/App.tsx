import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import StopWatch from './components/StopWatch';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <StopWatch />
      <div>
        <h2>登録・編集</h2>
        <Link to="/assets/edit">登録・編集へ</Link>
        <br />
        <Link to="/calender/show">カレンダーへ</Link>
        <br />
      </div>
    </>
  );
}

export default App;
