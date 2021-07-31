import {useContext} from 'react';

const CountryPicker = ({ CountryContext }) => {
    console.log('CountryPicker');
    const { country, setCountry } = useContext(CountryContext);
    return (
        <select value={country} onChange={ e=> setCountry(e.target.value)}>
            <option value="IN">India</option>
            <option value="DE">Germany</option>
            <option value="CA">Canada</option>
        </select>
    );
};

export default CountryPicker;