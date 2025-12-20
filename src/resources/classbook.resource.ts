import type { Api } from '../api/base.api';
import type { Classbook } from '../models/classbook.model';
import { objectToCamel } from 'ts-case-convert';

export class ClassbookResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getClassbooks(): Promise<Classbook> {
        const response = await this.api.client.get('/3/classbook');

        return objectToCamel<Classbook>(response.data);
    }
}
