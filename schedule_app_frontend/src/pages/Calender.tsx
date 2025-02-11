import Header from '../components/Header';
import { Link } from 'react-router-dom';

export const Calender: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        Calender
        <div></div>
      </div>
      <Link to="/">Topへ</Link>
    </>
  );
};

// export default Calender;
