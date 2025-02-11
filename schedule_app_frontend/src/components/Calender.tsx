import Header from './Header';
import { Link } from 'react-router-dom';

export const Calender: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        Calender
        <div></div>
      </div>
      <Link to="/">Homeへ</Link>
    </>
  );
};

// export default Calender;
