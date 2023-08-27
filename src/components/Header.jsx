import NavBar from "./NavBar"

const Header = ({ tabletOrLess }) => {
  return (
    <header>
      {tabletOrLess ? (
        <BurgerMenu />
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default Header;