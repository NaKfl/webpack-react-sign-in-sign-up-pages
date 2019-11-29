import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col } from 'react-bootstrap';
// // Redux
import { connect } from 'react-redux';
// Components
import SignUpForm from '../../components/SignUpForm';
import PropTypes from 'prop-types';
// style
import './signin.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'signInForm'
    };
  }

  submitSignUp = (values) => {
    if (values)
      this.props.signUp(values);
  };

  render() {
    return (
      <div>
        <Container fluid={false}>
          <Row>
            <Col>
              {/* Form điền thông tin đăng kí */}
              {this.state.display === 'signInForm' &&
                <div className='sign-in'>
                  <div className='logo'>
                    <img src='https://image.flaticon.com/icons/svg/2188/2188871.svg' alt='logo'
                      width='100' height='100' />
                  </div>
                  <SignUpForm onSubmit={this.submitSignUp} />
                  <p className='suggest-link'
                    align='center'>Already have account? <Link to='/signin'>Sign In</Link></p>
                </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signUp: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch({ type: 'SIGN_UP_REQUEST', data })
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
