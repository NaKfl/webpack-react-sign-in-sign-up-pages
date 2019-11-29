import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, navigate } from '@reach/router';
import monent from 'moment';
// redux
import { connect } from 'react-redux';
// components
import InfomationForm from '../../components/InfomationForm';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'infoForm'
    };
  }

  submitInformation = async (values) => {
    const userInfo = {
      ...values,
      sessionToken: this.props.user.sessionToken,
      birthday: monent(values.birthday).format('YYYY/MM/DD')
    };
    await this.props.updateProfile(userInfo);

    // kiểm tra chuyển trạng thái
    this.setState({
      display: 'finish'
    })
  };
  render() {
    return (
      <div>
        {/* Form điền thông tin câ nhân */}
        {this.state.display === 'infoForm' &&
          <div className='information'>
            <h3 align='center'>Personal Infomation</h3>
            <InfomationForm onSubmit={this.submitInformation} />
          </div>}

        {/* Cửa sổ hoàn thành */}
        {this.state.display === 'finish' &&
          <div className='finish'>
            <div className='logo'>
              <img src='https://image.flaticon.com/icons/svg/2188/2188871.svg' alt='logo'
                width='100' height='100' />
            </div>
            <h2 align='center'>Congratulations!</h2>
            <p align='center'>Your account has been created successfully</p>

            <Link align='center' to='/user'>
              <Button block>
                OK
              </Button>
            </Link>
          </div>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (data) => dispatch({ type: 'UPDATE_PROFILE_REQUEST', data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);