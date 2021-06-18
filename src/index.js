import React from 'react';
import ReactDOM from 'react-dom';
// import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return <div>You are in northern hemisphere!</div>;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
