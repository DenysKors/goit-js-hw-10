import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 3000;
let elRef = selector => document.querySelector(selector);

elRef('#search-box').addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(evt) { 
    const name = (evt.target.value).trim();
    if (name === "") {
        elRef('.country-list').innerHTML = "";
        elRef('.country-info').innerHTML = "";
    } else { 
        fetchCountries(name)
        .then((countries) => console.log(countries))
        .catch((error) => console.log(error));
    }
}