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
            filterProducts: {}
        };
    }

    componentDidMount() {
        this.props.fetchProducts().then(() => {
            this.setState({ filterProducts: this.props.products });
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
        let filteredProducts = _.filter(this.props.products, product => {
            return product.title.match(new RegExp(event.target.value, "i"));
        });

        this.setState({
            searchTerm: event.target.value,
            filterProducts: filteredProducts
        });
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = {
    fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
