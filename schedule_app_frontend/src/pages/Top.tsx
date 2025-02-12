import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import '../styles/top.css';
import StopWatch from '../components/StopWatch';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Clock from '../components/Clock';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Clock />
      <StopWatch />
      <div>
        <Link to="/assets/edit">登録・編集へ</Link>
        <br />
        <Link to="/vehicles/edit">車両の登録・編集へ</Link>
        <br />
        <Link to="/calender/show">カレンダーへ</Link>
        <br />
      </div>
    </>
  );
}

export default App;
