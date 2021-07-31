import React from 'react';
import CountryPicker from './CountryPicker';
import CountryDetails from './CountryDetails';

const HomeContent = React.memo(({ CountryContext }) => {
    console.log('HomeContent');
    return (
        <div>
            <CountryPicker CountryContext={CountryContext} />
            <CountryDetails CountryContext={CountryContext} />
        </div>
    );
});

export default HomeContent;