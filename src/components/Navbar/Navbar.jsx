import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

const List = ({ classContainer }) => (
  <ul className={classContainer}>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <List classContainer="app__navbar-links" />
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book a Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
        {/* Este siguiente bloque es para mostrar el menu mobile, al darle click al menu se despliega el mismo ocupando la pantalla */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <List classContainer={"app__navbar-smallscreen-links"} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
