function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(n){return fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()}))}var i,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return s.Date.now()};function g(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(g(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=g(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=u.test(n);return e||a.test(n)?f(n.slice(2),e?2:8):r.test(n)?NaN:+n}i=function(n,t,e){var i,o,r,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=i,r=o;return i=o=void 0,c=t,u=n.apply(r,e)}function h(n){return c=n,a=setTimeout($,t),l?y(n):u}function j(n){var e=n-f;return void 0===f||e>=t||e<0||s&&n-c>=r}function $(){var n=v();if(j(n))return T(n);a=setTimeout($,function(n){var e=t-(n-f);return s?m(e,r-(n-c)):e}(n))}function T(n){return a=void 0,p&&i?y(n):(i=o=void 0,u)}function w(){var n=v(),e=j(n);if(i=arguments,o=this,f=n,e){if(void 0===a)return h(f);if(s)return a=setTimeout($,t),y(f)}return void 0===a&&(a=setTimeout($,t)),u}return t=b(t)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(b(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},w.flush=function(){return void 0===a?u:T(v())},w};let y=n=>document.querySelector(n);y("#search-box").addEventListener("input",n(i)((function(n){const t=n.target.value.trim();""===t?(y(".country-list").innerHTML="",y(".country-info").innerHTML=""):e(t).then((n=>function(n){const t=n.length;if(console.log(n),t>10)return void console.log("Too many matches found. Please enter a more specific name.");t>=2&&t<=10?function(n){const t=n.map((n=>`\n        <li class="countries">\n            <img src="${n.flags.svg}" alt="Флаг ${n.name.official}" width="40">\n            <p>${n.name.official}</p>\n        </li>\n        `)).join("");y(".country-list").innerHTML=t}(n):function(n){const t=n.map((n=>`\n        <ul>\n            <li class="countrie">\n                <img src="${n.flags.svg}" alt="Флаг ${n.name.official}" width="60">\n             <p>${n.name.official}</p>\n            </li>\n            <li>\n                <p><b>Capital:</b> ${n.capital}</p>\n            </li>\n            <li>\n                <p><b>Population:</b> ${n.population}</p>\n            </li>\n            <li>\n                <p><b>Languages:</b> ${Object.values(n.languages)}</p>\n            </li>\n        </ul>\n        `)).join("");y(".country-info").innerHTML=t}(n)}(n))).catch((()=>console.log("Oops, there is no country with that name")))}),3e3));
//# sourceMappingURL=index.1c6cb355.js.map