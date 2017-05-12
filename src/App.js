import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../public/css/index.css';
// import Foundation from 'react-foundation';
import logo from './logo.svg';
import Form from './components/Form';


class App extends Component {
    render() {
        return (
            <div>
                {/*<div className="App">*/}
                    {/*<div className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        {/*<h2>React-Foundation</h2>*/}
                    {/*</div>*/}
                    {/*<p className="App-intro">*/}
                        {/*Test App using Foundation Library*/}
                    {/*</p>*/}
                {/*</div>*/}
                <Form />

            </div>
        );
    }
}

export default App;
