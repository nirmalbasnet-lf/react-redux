import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const authState = useSelector(state => state.auth);

  const authRenderContent = () => {
    switch (authState) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">FULLSTACK</a>
        <ul className="right">{authRenderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
