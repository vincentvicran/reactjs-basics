import React, { createContext, useContext } from 'react';

const moods = {
    happy: 'happy',
    sad: 'sad',
    angry: 'angry',
};

const MoodContext = createContext(moods);

const Moods = () => {
    return (
        <MoodContext.Provider value={moods.happy}>
            <MoodText />
        </MoodContext.Provider>
    );
};

function MoodText() {
    const mood = useContext(MoodContext);

    return <p>{mood}</p>;
}

export default Moods;
