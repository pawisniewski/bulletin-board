import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Button from '@material-ui/core/Button';

import styles from './UnloggedBar.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Button color="inherit" href="https://google.com">Login</Button>
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
  Component as UnloggedBar,
  // Container as UnloggedBar,
  Component as UnloggedBarComponent,
};
