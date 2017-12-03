import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import _ from 'lodash';

export default class ProductsList extends Component {
    /* Component Life Cycle Methods
    ---------------------------------------------------- */
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps({ selectedCategory }) {
    }

    render() {
        return <ul />;
    }
}
