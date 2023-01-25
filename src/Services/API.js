import {API_KEY, BASE_URL} from '../config';

export const GET = async (url) => {
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(API_URL, {method: 'GET', headers: {'Content-type': 'application/json',},});
    if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
    }
    response = response.json();
    return response
}