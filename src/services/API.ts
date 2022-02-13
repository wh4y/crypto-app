import axios from 'axios';

const baseURL = 'https://coinranking1.p.rapidapi.com';

const options = {
    baseURL,
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '6120a7df61msh32c7ec8aebe33a8p123e84jsn285b6cad2910'
    }
}

export const API = axios.create(options);
