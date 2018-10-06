import { combineReducers } from 'redux';
import productReducer from './productReducer';
import floatCartReducer from './floatCartReducer';

// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法。
// 单一的应用场景：把不同片段的 state 的更新工作委托给一个特定的 reducer，
// 以此更新由普通的 JavaScript 对象构成的 state 树。
export default combineReducers({
  products: productReducer,
  cartProducts: floatCartReducer
});