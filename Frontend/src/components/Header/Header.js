import "./Header.css";
import headerimg from './headerimg.png';
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Movie Nerd
    </span>
  );
};

export default Header;
