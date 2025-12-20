import type { LoginDto } from '../models/login.model';
import * as constants from '../constants';
import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';

export class LoginResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async authenticate(username: string, password: string): Promise<LoginDto> {
        const params = new URLSearchParams();

        params.append('username', username);
        params.append('password', password);
        params.append('grant_type', constants.GRANT_TYPE);
        params.append('client_id', constants.CLIENT_ID);

        const response = await this.api.client.post('/login', params);
        const data = objectToCamel<LoginDto>(response.data);

        this.api.setAuthToken(data.accessToken);

        return data;
    }
}
