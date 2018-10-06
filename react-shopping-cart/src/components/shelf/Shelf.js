import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import Spinner from '../Spinner';
import Clearfix from '../Clearfix';
import { fetchProducts } from '../../store/actions/productActions';
import { addProduct } from '../../store/actions/floatCartActions';
class Shelf extends Component {
    state = {
        loading: false
    };
    componentWillMount() {
        const { filters, sort } = this.props;

        this.handleFetchProducts(filters, sort);
    }
    componentWillReceiveProps(nextProps) {
        console.log('这里开始执行了')
        const { filters: nextFilters, sort: nextSort } = nextProps;

        if (nextFilters !== this.props.filters) {
            this.handleFetchProducts(nextFilters, undefined);
        }

        if (nextSort !== this.props.sort) {
            this.handleFetchProducts(undefined, nextSort);
        }
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

        const p = products.map(p => {
            return (
                <Product
                    product={p}
                    addProduct={this.props.addProduct}
                    key={p.id}
                />
            );
        });
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
    filters: null,
    sort: null
});

export default connect(
    mapStateToProps,
    { fetchProducts, addProduct }
)(Shelf);
