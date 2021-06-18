import React from 'react';

const HemisphereDisplay = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    );
    return <div>Latitude: </div>;
};

export default HemisphereDisplay;
