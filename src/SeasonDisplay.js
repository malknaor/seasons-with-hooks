import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, its is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    let season;

    if (month > 2 && month < 9) {
        season = latitude > 0 ? 'summer' : 'winter';
    } else {
        season = latitude > 0 ? 'winter' : 'summer';
    }

    return season;
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;