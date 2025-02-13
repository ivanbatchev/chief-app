import logo from "../../assets/chef-claude-icon.png";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo-image" src={logo} alt={"chief logo"} />
        <h1 className="header__text">Chef Claude</h1>
      </div>
    </header>
  );
}
