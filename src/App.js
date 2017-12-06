import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories, selectCategory } from "./categories/actions";
import { fetchProducts } from "./products/actions";
import Header from "./global/components/Header";
import ProductsList from "./products/components/ProductsList";

export class App extends Component {
    /* Component Life Cycle
    ---------------------------------------------------- */
    constructor(props) {
        super(props);
        this.handleSelectCategory = this.handleSelectCategory.bind(this);
    }

    componentDidMount() {
        const categories = this.props
            .fetchCategories()
            .then(() => {
                this.handleSelectCategory(this.props.match.params.id);
            });

        const products = this.props.fetchProducts();

        Promise.all([categories, products]);
    }

    componentWillReceiveProps(newProps) {
        this.handleSelectCategory(newProps.match.params.id);
    }

    render() {
        return (
            <div className="container">
                <Header categorySlug={this.props.match.params.id} />
                <h1>App Page</h1>
                <ProductsList />
            </div>
        );
    }

    /* Component Methods
    ---------------------------------------------------- */
    handleSelectCategory(id) {
        if (this.props.categories.length) {
            return this.props.selectCategory(
                this.props.categories.find(category => {
                    return category.slug === id;
                })
            );
        }

        return false;
    }
}

export const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = {
    fetchCategories,
    fetchProducts,
    selectCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
