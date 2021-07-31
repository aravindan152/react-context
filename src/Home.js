import {createContext, useState} from 'react';
import HomeContent from './HomeContent';

const CountryContext = createContext();

const CountryProvider = () => {
    const [country, setCountry] = useState('IN');
    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            <HomeContent CountryContext={CountryContext} />
        </CountryContext.Provider>
    );
};

export default CountryProvider

//
// import {useState, memo} from 'react';
//
// export default () => {
//     return (
//         <div>
//             <Home />
//         </div>
//     );
// };
//
// const Home = () => {
//   console.log('Home')
//   return (
//       <div>
//         <HomeContent />
//       </div>
//   );
// }
//
// const CountryPicker = ({ country, setCountry }) => {
//     console.log('CountryPicker')
//     return (
//         <select value={country} onChange={e => setCountry(e.target.value)}>
//             <option value="IN">India</option>
//             <option value="DE">Germany</option>
//         </select>
//     );
// };
//
// const CountryDetails = ({country}) => {
//     console.log('CountryDetails')
//     return <h1>{country}</h1>;
// };
//
// const CountryTitle = memo(() => {
//     console.log('CountryTitle')
//     return <h1>COUNTRY TITLE</h1>;
// });
//
// const HomeContent = memo(() => {
//     const [country, setCountry] = useState('IN');
//     console.log('HomeContent')
//     return (
//         <div>
//             <CountryTitle />
//             <CountryPicker country={country} setCountry={setCountry} />
//             <CountryDetails country={country} />
//         </div>
//     );
// });
