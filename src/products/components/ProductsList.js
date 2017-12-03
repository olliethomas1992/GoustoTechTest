import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import _ from "lodash";

class ProductsList extends Component {
    /* Component Life Cycle Methods
    ---------------------------------------------------- */
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: [],
            name: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentWillReceiveProps({ selectedCategory, products }) {
        this.setState({
            filteredProducts: this.categoriseProducts(
                selectedCategory,
                products
            )
        });
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange} type="text" />
                <ul>{this.renderProducts()}</ul>
            </div>
        );
    }

    /* Component Methods
    ---------------------------------------------------- */

    onInputChange(event) {
        this.setState({
            filteredProducts: this.categoriseProducts(this.props.selectedCategory, this.props.products).filter(product => {
                return product.title.match(new RegExp(event.target.value, "i"));
            })
        });
    }

    categoriseProducts(category, products) {
        if (_.isEmpty(category)) {
            return products;
        }
        return products.filter((product, index) => {
            const { id } = category;
            let isInCategory = product.categories.find(category => {
                return category.id === id;
            });
            if (isInCategory) {
                return product;
            }
        });
    }

    matchesSearchTerm(productTitle) {
        return productTitle.match(`/${this.state.searchTerm}/i`);
    }

    renderProducts() {
        return this.state.filteredProducts.map((product, index) => {
            return <li key={index}>{product.title}</li>;
        });
    }
}

const mapStateToProps = state => ({
    products: state.products,
    selectedCategory: state.selectedCategory
});

const mapDispatchToProps = {
    fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
