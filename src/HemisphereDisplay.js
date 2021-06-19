import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northernHemisphere.webp';
import southernPic from './image/southernHemisphere.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'It is Northern Hemisphere!',
        picture: northernPic,
    },
    Southern: {
        text: 'It is Southern Hemisphere!',
        picture: southernPic,
    },
};

const HemisphereDisplay = ({ latitude }) => {
    // latitude = -25;
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';

    const { text, picture } = hemisphereConfig[hemisphere];

    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt={text} height="500" width="600" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default HemisphereDisplay;
