import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import styles from './LoggedBar.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Button component={NavLink} to={`/my-posts`} color="inherit">My posts</Button>
    <Button component={NavLink} to={`/`} color="inherit">Logout</Button>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as LoggedBar,
  // Container as LoggedBar,
  Component as LoggedBarComponent,
};
