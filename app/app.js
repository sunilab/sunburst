// Main React application entry point

import React from 'react';
import _ from 'lodash';

class App extends React.Component {
    render () {
        console.log('hello from react');
        return (
            <h1>The Dashboard App now with Webpack enhancements and code splitting!</h1>
        );
    }
}

export default App;