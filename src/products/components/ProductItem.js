import React, { Component } from "react";

export default class ProductItem extends Component {

    /* Component Life Cycle
    ----------------------------------------------------*/
    constructor(props) {
        super(props);

        this.state = { toggleDesc: false };
        this.handleProductClick = this.handleProductClick.bind(this);
    }

    render() {
        return (
            <li className="products__product-item">
                <a
                    className={`btn-link ${
                        this.state.toggleDesc ? "active" : ""
                    }`}
                    onClick={this.handleProductClick}
                    href="#"
                >
                    {this.props.product.title}
                </a>
                {this.state.toggleDesc ? (
                    <div className="desc">{this.props.product.description}</div>
                ) : (
                    undefined
                )}
            </li>
        );
    }

    /* Component Methods
    ---------------------------------------------------- */
    handleProductClick(event) {
        event.preventDefault();
        this.setState({
            toggleDesc: !this.state.toggleDesc
        });
    }
}
