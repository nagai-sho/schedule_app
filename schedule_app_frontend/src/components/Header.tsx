// import ReactDom from 'react-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img src="#" />
        <h2>株式会社京和設備</h2>
      </div>
      <MenuIcon>
        <div className="h_menu">
          <ul>
            <li>Top</li>
            <li>Calender</li>
            <li>Edit</li>
          </ul>
        </div>
      </MenuIcon>
    </header>
  );
};

export default Header;
