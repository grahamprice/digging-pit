import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Search from "./Search";
import { UserContext } from "../index";

function NavBar({
  handleLogout,
  isLoggedIn,
  setCart,
  cart,
  product,
  searchTerm,
  onChangeSearch,
}) {
  let history = useHistory();

  const currentUser = useContext(UserContext);
  console.log(currentUser);

  const toProfile = () => {
    history.push("/profile");
  };
  const toSignUp = () => {
    history.push("/signup");
  };
  const toHome = () => {
    history.push("/");
  };

  const toLogIn = () => {
    history.push("/login");
  };
  // function handleAddToCart() {
  //   setCart([...cart, product]);
  // }

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="https://i.ebayimg.com/images/g/fNkAAOSwWHRhoud5/s-l140.webp"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          The Digging Pit
        </span>
      </Navbar.Brand>

      {currentUser ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Welcome</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.username}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={toHome}>Home</Dropdown.Item>
            <Dropdown.Item onClick={toProfile}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Welcome</span>
              <span className="block truncate text-sm font-medium">
                Please Sign In
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={toSignUp}>Sign Up</Dropdown.Item>
            <Dropdown.Item onClick={toLogIn}>Log In</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Navbar href="/search_results">
          <Search searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
        </Navbar>
        {/* <Navbar.Link href="/" id="nav-home-link">
          Home
        </Navbar.Link> */}

        <Navbar.Link id="cart-button-nav" href="/cart">
          Cart
        </Navbar.Link>
        {/* <Navbar.Link href="/contact"></Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
