import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories, selectCategory } from "../../categories/actions";
import { NavLink } from "react-router-dom";

export class Header extends Component {
    /* Life Cycle Methods
    ---------------------------------------------------- */
    render() {
        return <ul className="menu">{this.renderCategories()}</ul>;
    }

    /* Component Functions
    ---------------------------------------------------- */
    renderCategories() {
        if (!Array.isArray(this.props.categories)) {
            return <li className="menu__menu-item">Loading...</li>;
        }
        
        return this.props.categories.map((category, index) => {
            return <li className="menu__menu-item" key={index}>
            <NavLink className="btn-link" to={`/${category.slug}`}>
                {category.title}
            </NavLink>
            </li>
        });
    }
}

export const mapStateToProps = state => ({categories: state.categories});

export default connect(mapStateToProps, null)(Header);
