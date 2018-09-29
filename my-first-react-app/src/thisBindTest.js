import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    hander() {
        console.log(this);
    }
    render() {
        return (
            <div onClick={hander}>
                cesh
            </div>
        );
    }

}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);