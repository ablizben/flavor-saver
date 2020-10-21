import React, { useState, useEffect } from "react";

const styles = {
  headerStyles: {
    background:
      "url('https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  other: {
    marginTop: "500px",
  },
};

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log("this will log one time right when the page loads");
  }, [showMenu]);

  const toggleMenu = () => {
    console.log("click worked");
    setShowMenu(!showMenu);
    //showMenu = !showMenu
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
              <a href="#">
                Flavor Saver
              </a>
            </div>
          </div>
          <div className="col-2 p-0 d-flex align-items-center">
            <a
              href="profile.html"
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
                    <li><a href="feed.html">Feed</a></li>
                    <li><a href="add.html">New Post</a></li>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
                </div>
      ) : (
        <h4 style={styles.other}></h4>
      )}
    </>
  );
}

export default Header;