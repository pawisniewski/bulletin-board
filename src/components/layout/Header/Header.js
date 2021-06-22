import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser, login, logout } from '../../../redux/userRedux.js';

import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Toolbar, Link } from '@material-ui/core';

import { LoggedBar } from '../../features/LoggedBar/LoggedBar';
import { UnloggedBar } from '../../features/UnloggedBar/UnloggedBar';

import styles from './Header.module.scss';

const Component = ({ className, user, login, logout }) => {
  const NavBar = user ? LoggedBar: UnloggedBar;

  const selectUser = ({target}) => {
    if (target.value) {
      login({ type: target.value, email: 'author1@example.com' });
    } else logout();
  };
  
  return (
    <div className={clsx(className, styles.root)}>
      <AppBar position="fixed">
        <Toolbar className={styles.toolbar}>
          <Link component={RouterLink} to="/" variant="h6" color="inherit" underline="none" className={styles.title}>
            Bulletin Board
          </Link>
          <NavBar/>
          <select className={styles.select} value={user ? user.type : ''} onChange={selectUser}>
            <option value=''>---</option>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
