import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contect from 'react-redux';
import Product from './Product';
import Spinner from '../Spinner';
import Clearfix from '../Clearfix';

class Shelf extends Component {
    state = {
        loading: false
    };
    componentWillMount() {
        const { filters, sort } = this.props;

        this.handleFetchProducts(filters, sort);
    }

    componentWillReceiveProps() {
        // 这时候应该做些事，待定
    }
    handleFetchProducts = (
        filters = this.props.filters,
        sort = this.props.sort
    ) => {
        // 首先更新loading状态
        this.setState({
            loading: true
        });

        // 第三个参数是回调函数，自定义的不要忘了
        this.props.fetchProducts(filters, sort, () => {
            this.setState({
                loading: false
            });
        });
    };
    render() {
        const { products } = this.props;
        let p = products.map(prodcut => (
            <Product
                prodcut={prodcut}
                addProduct={this.props.addProduct}
                key={prodcut.id}
            />
        ));
        return (
            <React.Fragment>
                {this.state.loading && <Spinner />}
                <div className="shelf-container">{p}</div>
                <Clearfix />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filters: state.filters.items,
    sort: state.sort.item
});

export default contect(mapStateToProps, { fetchProducts, addProduct })(Shelf);
