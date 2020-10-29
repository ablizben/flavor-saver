import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const styles = {
  headerStyles: {
    background:
      "url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }
};

function Header() {

  const [error,setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { history } = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log("this will log one time right when the page loads");
  }, [showMenu]);

  const toggleMenu = () => {
    console.log("click worked");
    setShowMenu(!showMenu);
    //showMenu = !showMenu
  };

  async function handleLogout() {
    setError('');
    try {
        await logout();
        history.push('/login');
    } catch {
        setError('Failed to log out');
    }
  };

  return (
    <>
      <div>
        <header className="row m-0 fixed-top">
          <div className="col-2 p-0 d-flex align-items-center">
            <a href="#" onClick={toggleMenu} className="menu-button">
              <i className="fal fa-bars"></i>
            </a>
          </div>
          <div className="col-8 p-0 d-flex align-items-center">
            <div className="logo">
              <a href="/">
                Flavor Saver
              </a>
            </div>
          </div>
          <div className="col-2 p-0 d-flex align-items-center">
            <a
              href="/profile"
              className="profile-circle"
              style={styles}
            ></a>
          </div>
        </header>
      </div>
      {showMenu ? (
        <div className="menu" style={styles}>
          <div className="close"onClick={toggleMenu}><i className="fal fa-times"></i></div>
          <ul className="nav w-100">
              <li><a href="/">Feed</a></li>
              <li><a href="/add-post">New Post</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Header;