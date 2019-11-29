import React from 'react';
import { Redirect } from '@reach/router';
import { Spinner } from 'react-bootstrap';
// style
import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 1000);
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect from='/' to='signin' noThrow />;
    }
    return (
      <div className='home-component'>
        <div className='openning'>
          <h1>KOREC</h1>
          <Spinner
            animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }
}
export default Home;