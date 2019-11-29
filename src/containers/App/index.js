import React from 'react';
import { Router } from '@reach/router';
// components
import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import User from '../User';
import Information from '../Information';
//style
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='app-container'>
          <Router>
            <Home path='/' />
            <SignIn path='signin' />
            <SignUp path='signup' />
            <Information path='information' />
            <User path='user' />
          </Router>
        </div>
      </div>
    );
  }
}
export default App;