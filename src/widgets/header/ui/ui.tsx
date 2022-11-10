import Logo from "assets/header/Logo.png";
import Icon_acc from "assets/header/Icon_acc.png";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="header__orders">
        <div>
          <a href="#">
            <img src={Icon_acc} alt="icon_acc" />
          </a>
        </div>
        <span>Мои заказы</span>
      </div>
    </header>
  );
};

export default Header;
