import axios, { type AxiosInstance } from 'axios';
import * as constants from '../constants';

export class Api {
    public readonly client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: constants.TIMEOUT,
        });

        this.setInterceptors();
    }

    setAuthToken(token: string | null) {
        if (token) {
            // Add Authorization header to ALL future requests from this instance
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            // Remove the header (e.g., on logout)
            delete this.client.defaults.headers.common['Authorization'];
        }
    }

    private setInterceptors() {
        // Add details to axios error responses
        this.client.interceptors.response.use(
            res => res,
            err => {
                const details = {
                    url: err.config?.url,
                    method: err.config?.method,
                    status: err.response?.status,
                    data: err.response?.data
                };

                return Promise.reject({ err, details });
            }
        );
    }
}
