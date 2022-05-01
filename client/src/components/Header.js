import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

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
          <>
            <li>
              <Stripe />
            </li>
            <li style={{ marginLeft: '15px' }}>Credits: {authState.credits}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={authState ? '/surveys' : '/'} className="left brand-logo">
          FULLSTACK
        </Link>
        <ul className="right">{authRenderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
