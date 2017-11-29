import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../categories/actions";

class Header extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        return _.map(this.props.categories, (category, index) => {
            return <li className="menu__menu-item" key={index}>{category.title}</li>;
        });
    }

    render() {
        return <ul className="menu">{this.renderCategories()}</ul>;
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = {
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
