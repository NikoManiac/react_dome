import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

const productsAPI =
    'https://react-shopping-cart-67954.firebaseio.com/products.json';
const compare = {
    lowestprice: (a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    },
    highestprice: (a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
    }
};
export const fetchProducts = (filters, sortBy, callback) => dispatch => {
    // 还需要了解redux异步请求的原理
    axios
        .get(productsAPI)
        .then(res => {
            let { products } = res.data;
            console.log(products);
            if (!!filters && filters.length > 0) {
                products = products.filter(p =>
                    filters.find(f => p.availableSizes.find(size => size === f))
                );
            }

            if (!!sortBy) {
                products = products.sort(compare[sortBy]);
            }

            if (!!callback) {
                callback();
            }
            // 需要明白这里的调用关系
            return dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            });
        })
        .catch(err => {
            console.log("dddddddddddddddd" + err);
            throw new Error('Could not fetch products. Try again later.');
        });
};
