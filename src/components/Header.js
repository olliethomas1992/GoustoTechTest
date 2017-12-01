import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories, selectCategory } from "../categories/actions";
import { NavLink } from "react-router-dom";

class Header extends Component {
    /* Life Cycle Methods
    ---------------------------------------------------- */
    componentDidMount() {
        this.props.fetchCategories().then(() => {
            this.props.selectCategory(this.props.selectedCategory || {});
        });
    }

    componentWillReceiveProps(newProps) {
        this.props.selectCategory(newProps.selectedCategory);
    }

    render() {
        return <ul className="menu">{this.renderCategories()}</ul>;
    }

    /* Component Functions
    ---------------------------------------------------- */
    renderCategories() {
        return _.map(this.props.categories, (category, index) => {
            return (
                <li className="menu__menu-item" key={index}>
                    <NavLink activeClassName="active" to={`/${category.slug}`}>{category.title}</NavLink>
                </li>
            );
        });
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
        selectedCategory: state.categories[ownProps.categorySlug]
    };
};

const mapDispatchToProps = {
    fetchCategories,
    selectCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
