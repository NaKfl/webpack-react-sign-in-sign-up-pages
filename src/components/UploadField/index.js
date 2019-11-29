import React, { Component } from 'react';
import './style.scss';

export default class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'https://image.flaticon.com/icons/svg/149/149071.svg'
    };
  }

  handleOnChange = (e) => {
    const { input: { onChange } } = this.props;
    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0])
    });
    onChange(e.target.files[0]);
  }

  render() {
    return (
      <div className='form-upload'>
        <img src={this.state.imageUrl} alt='avatar'
          width='150' height='150' />
        <div>

          <div className='upload-btn-wrapper'>
            <button className="btn">Upload a file</button>
            <input
              type='file'
              accept='.jpg, .png, .jpeg'
              onChange={this.handleOnChange} />
          </div>

        </div>
      </div>
    );
  }
}