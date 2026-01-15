import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { UserDto } from '../models/user.model';

export class userResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getCurrentUser(): Promise<UserDto> {
        const response = await this.api.client.get('/3/user');

        return objectToCamel<UserDto>(response.data);
    }
}
