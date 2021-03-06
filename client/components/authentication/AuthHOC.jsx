import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNav from '../common/UserNav';
import AppNav from '../common/AppNav';
import Footer from '../common/Footer';

/**
 * @description Authentication HOC
 *
 * @param {jsx} Component -jsx component
 *
 * @returns {jsx} -return component
 */
export default (Component) => {
  let user, rightLinkObject;

  /**
   *
   * @class AuthHOC
   *
   * @extends {React.Component}
   */
  class AuthHOC extends React.Component {
    /**
     *
     * @returns {void} -returns nothing
     */
    componentWillMount() {
      if (!localStorage.getItem('postitUser')) {
        this.props.history.push('/login');
      }
    }

    /**
     *
     * @return {void} -returns nothing
     *
     * @memberof AuthHOC
     */
    componentDidMount() {
      $('.dropdown-button').dropdown();
      $('.collapsible').collapsible();
      $('.button-collapse').sideNav();
    }
    /**
     * @description render function
     *
     * @returns {jsx} -jsx representation of the component
     */
    render() {
      user = JSON.parse(localStorage.getItem('postitUser'));
      rightLinkObject = (
        <Link
          className="dropdown-button big"
          to="#"
          id="username"
          data-activates="userDropdown"
        >
          {user.username}
          &nbsp;
          <i className="fa fa-caret-down" />
        </Link>
      );
      return (
        <div>
          <UserNav rightLink={rightLinkObject} history={this.props.history} />
          <div className="app-body component-container row">
            <AppNav />
            <Component {...this.props} />
            <Footer />
          </div>
        </div>
      );
    }
  }
  AuthHOC.propTypes = {
    history: PropTypes.object.isRequired
  };
  /**
   * @description Maps state to props
   *
   * @param {object} state -application state
   *
   * @returns {object} -returns part of the state
   */
  const mapStateToProps = state => ({
    user: state.authReducer.user
  });
  return connect(mapStateToProps)(AuthHOC);
};
