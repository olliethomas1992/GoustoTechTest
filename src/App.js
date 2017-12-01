import React, { Component } from "react";

import Header from './components/Header';
import ProductsList from './products/components/ProductsList';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header categorySlug={this.props.match.params.id} />
                <h1>App Page</h1>
                <ProductsList/>
            </div>
        );
    }
}
