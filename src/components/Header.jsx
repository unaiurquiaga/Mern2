import NavBar from "./NavBar";
import BurguerMenu from "./BurguerMenu";

const Header = ({ tabletOrLess }) => {
  return (
    <header>
      {tabletOrLess ? (
        <BurguerMenu />
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default Header;