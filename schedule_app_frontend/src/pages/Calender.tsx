import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Day from '../components/Day';
import '../styles/calender.css';

export const Calender: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        Calender
        <div></div>
        <div>○月</div>
      </div>
      <div className="days">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
      <Link to="/">Topへ</Link>
    </>
  );
};

// export default Calender;
