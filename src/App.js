import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories, selectCategory } from "./categories/actions";
import { fetchProducts } from "./products/actions";
import Header from "./global/components/Header";
import ProductsList from "./products/components/ProductsList";

class App extends Component {
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

        Promise.all([categories, products]).catch(error => {
            console.log(error);
        });
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

    handleSelectCategory(id) {
        if (this.props.categories.length) {
            this.props.selectCategory(
                this.props.categories.find(category => {
                    return category.slug === id;
                })
            );
        }
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = {
    fetchCategories,
    fetchProducts,
    selectCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
