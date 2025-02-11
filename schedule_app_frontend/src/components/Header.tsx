// import ReactDom from 'react-dom';
import '../styles/header.css';
const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img src="#" />
        <h2>株式会社京和設備</h2>
      </div>
      <div className="h_menu">
        <ul>
          <li>Top</li>
          <li>Calender</li>
          <li>Edit</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
