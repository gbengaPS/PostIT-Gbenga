import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { recoverPassword } from '../../actions/passwordAction';
import RecoverPasswordPage from './RecoverPasswordPage';

/**
 * -Recover password class
 * @class RecoverPassword
 * @extends {React.Component}
 */
class RecoverPassword extends React.Component {
  /**
   * -Creates an instance of RecoverPassword.
   * @param {object} props - react props
   * @returns {void} - return nothing
   * @memberof RecoverPassword
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: ''
    };
  }
  /**
   * Handles form submiting
   * @param {object} event - event object
   * @returns {void} - return nothing
   * @memberof RecoverPassword
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.sendEmail(this.state);
  }
  /**
   * Handles change in form input
   * @param {object} event -event object
   * @returns {void} - return nothing
   * @memberof RecoverPassword
   */
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }
  /**
   * -React render function
   * @returns {object} -jsx
   * @memberof RecoverPassword
   */
  render() {
    return (
      <RecoverPasswordPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        error={this.props.error.emailError}
        sending={this.props.sending}
      />
    );
  }
}

RecoverPassword.propTypes = {
  email: PropTypes.object,
  sendEmail: PropTypes.func.isRequired,
  error: PropTypes.object,
  sending: PropTypes.bool,
};

const mapStateToProps = state => (
  {
    email: state.recoverPassword,
    error: state.recoverPassword,
    sending: state.itemLoading,
  }
);
const mapDispatchToProps = dispatch => (
  {
    sendEmail: (email) => {
      dispatch(recoverPassword(email));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);