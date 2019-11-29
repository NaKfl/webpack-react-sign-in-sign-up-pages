import React from 'react';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import { signOut } from '../App/action';
// redux
import { connect } from 'react-redux';
// style
import './user.scss';

class User extends React.Component {
  handleSignOut = () => {
    this.props.dispatch(signOut());
    navigate('/signin');
  };
  render() {
    return (
      <div className='user-component'>
        <div className='avatar-name-container' >
          <img src={this.props.user.avatarUrl} alt='avatar'
            width='120' height='120' />
          <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
        </div>

        <div className='tabs-container' >
          <div className='tab'>
            <hr />
            <p>View something</p>
          </div>
          <div className='tab'>
            <hr />
            <p>View profile</p>
          </div>
          <div className='tab' onClick={this.handleSignOut}>
            <hr />
            <p className='text-danger'>Sign out</p>
          </div>
        </div>

        <div className='icons-container' >
          <div className='icons'>
            <div className='icon'>
              <img src='https://image.flaticon.com/icons/svg/263/263115.svg' alt='home'
                width='40' />
              <p>Home</p>
            </div>
            <div className='icon'>
              <img src='https://image.flaticon.com/icons/svg/1275/1275479.svg' alt='home'
                width='40' />
              <p>Company</p>
            </div>
            <div className='icon'>
              <img src='https://image.flaticon.com/icons/svg/633/633584.svg' alt='home'
                width='40' />
              <p>Notification</p>
            </div>
            <div className='icon'>
              <img src='https://image.flaticon.com/icons/svg/1246/1246351.svg' alt='home'
                width='40' />
              <p>Account</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  id: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps, null)(User);