import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import store from '../store/index';


import Shelf from '../components/shelf/Shelf';
// import Footer from '../components/Footer';
// import FloatCart from './../components/floatCart/FloatCart';

// import Corner from '../components/github/Corner';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    {/* <Corner /> */}
                    <main>
                        <Shelf />
                    </main>
                    {/* <Footer /> */}
                    {/* <FloatCart /> */}
                </div>
            </Provider>
        );
    }
}

export default App;
