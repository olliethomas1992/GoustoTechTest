import React, { Component } from "react";

import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <h1>App Page</h1>
            </div>
        );
    }
}
