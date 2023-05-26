import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" style={styles.link}>
      {/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}> */}
      Homepage
    </NavLink>

    {/* <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    > */}
    <NavLink to="/contacts" style={styles.link}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
