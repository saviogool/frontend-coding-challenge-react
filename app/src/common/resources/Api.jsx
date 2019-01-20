/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';
/* ************************************* */
/* ********         CODE        ******** */
/* ************************************* */
const Api = restful('https://api.github.com/search', fetchBackend(fetch));
/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default Api;