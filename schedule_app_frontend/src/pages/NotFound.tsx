import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Link to="/">Topへ</Link>
    </>
  );
};

export default NotFound;
