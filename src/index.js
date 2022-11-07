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
        .then((countries) => renderCountriesList(countries))
        .catch(() => console.log('Oops, there is no country with that name'));
    }
}

function renderCountriesList(countries) { 
    const amountOfCountries = countries.length;
    console.log(countries);
    if (amountOfCountries > 10) {
        console.log('Too many matches found. Please enter a more specific name.');
        return
    } else if (amountOfCountries >= 2 && amountOfCountries <= 10) {
        countriesMarkup(countries);
    } else { 
        countrieInfo(countries);
    }
}

function countriesMarkup(countries) { 
    const markup = countries.map((countrie) => {
        return `
        <li class="countries">
            <img src="${countrie.flags.svg}" alt="Флаг ${countrie.name.official}" width="40">
            <p>${countrie.name.official}</p>
        </li>
        `;
    })
        .join('');
    elRef('.country-list').innerHTML = markup;
}

function countrieInfo(countries) { 
        const markup = countries.map((countrie) => {
        return `
        <ul>
            <li class="countrie">
                <img src="${countrie.flags.svg}" alt="Флаг ${countrie.name.official}" width="60">
             <p>${countrie.name.official}</p>
            </li>
            <li>
                <p><b>Capital:</b> ${countrie.capital}</p>
            </li>
            <li>
                <p><b>Population:</b> ${countrie.population}</p>
            </li>
            <li>
                <p><b>Languages:</b> ${Object.values(countrie.languages)}</p>
            </li>
        </ul>
        `;
    })
        .join('');
    elRef('.country-info').innerHTML = markup;
}