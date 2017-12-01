import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";

class ProductsList extends Component {
    /* Component Life Cycle Methods
    ---------------------------------------------------- */
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            filterProducts: {},
            selectedCategory: {}
        };
    }

    componentDidMount() {
        this.props.fetchProducts().then(() => {
            this.setState({
                filterProducts: this.getCategoryProducts(this.props.products)
            });
        });
    }

    componentWillReceiveProps({ selectedCategory }) {
        return this.setState({
            selectedCategory,
            filterProducts: this.getCategoryProducts(
                this.props.products,
                selectedCategory
            )
        });
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onInputChange.bind(this)}
                    className="search"
                    type="text"
                />
                <ul className="products">{this.renderProductList()}</ul>
            </div>
        );
    }

    /* Component Methods
    ---------------------------------------------------- */
    getCategoryProducts(products, selectedCategory) {
        if (!selectedCategory) {
            return products;
        }

        let { id } = selectedCategory;
        let categoryProducts = {};
        _.map(products, product => {
            product.categories.forEach(category => {
                if (category.id === id) {
                    categoryProducts[product.slug] = product;
                }
            });
        });
        return categoryProducts;
    }

    renderProductList() {
        return _.map(this.state.filterProducts, (product, index) => {
            return (
                <li className="products__product-item" key={index}>
                    {product.title}
                </li>
            );
        });
    }

    onInputChange(event) {
        let filteredProducts = _.filter(this.getCategoryProducts(this.props.products, this.props.selectedCategory), product => {
            return product.title.match(new RegExp(event.target.value, "i"));
        });

        this.setState({
            searchTerm: event.target.value,
            filterProducts: filteredProducts
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
