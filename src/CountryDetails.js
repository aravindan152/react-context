import {useContext} from 'react';
import {useQuery} from 'react-query';

const fetchCountry = async ({ queryKey }) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${queryKey}`);
    return await response.json();
}
const CountryDetails = ({ CountryContext }) => {
    const { country } = useContext(CountryContext);
    const { data, isLoading, error } = useQuery(country, fetchCountry);
    console.log('CountryDetails');
    if (isLoading) return <div>"Loading Country Detail!!!"</div>;
    if (error) return <div>"Loading Country Detail failed!!!"</div>;
    return (
        <div>
            <h2>{country}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default CountryDetails;