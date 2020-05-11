import React, { Component } from 'react';
import 'cisco-ui/dist/css/cui-standard.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
