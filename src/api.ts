import axios from 'axios';
import * as constants from './constants.ts';

export const api = axios.create({
    baseURL: constants.BASE_URL,
    timeout: constants.TIMEOUT,
});

export function setAuthToken(token: string | null) {
    if (token) {
        // Add Authorization header to ALL future requests from this instance
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // Remove the header (e.g., on logout)
        delete api.defaults.headers.common['Authorization'];
    }
}
