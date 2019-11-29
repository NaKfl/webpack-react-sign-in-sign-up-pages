import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col } from 'react-bootstrap';
// redux
import { connect } from 'react-redux';
// components
import SignInForm from '../../components/SignInForm';
// style
import './signin.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

  }

  submitSignIn = (values) => {
    this.props.signIn(values);
  };

  render() {
    return (
      <div>
        <Container fluid={false}>
          <Row>
            <Col>
              <div className='logo'>
                <img src='https://image.flaticon.com/icons/svg/2188/2188871.svg' alt='logo'
                  width='100' height='100' />
              </div>
              <SignInForm onSubmit={this.submitSignIn} />
              <p className='suggest-link'
                align='center'>Don&apos;t have account? <Link to='/signup'>Sign Up</Link></p>
              <div className='suggest-link'>
                <a align='center' href='#'>Forgot your password</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (data) => dispatch({ type: 'SIGN_IN_REQUEST', data })
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
