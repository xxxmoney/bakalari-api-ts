import type { Api } from '../api/base.api';
import type { ClassbookDto } from '../models/classbook.model';
import { objectToCamel } from 'ts-case-convert';

export class ClassbookResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getClassbooks(): Promise<ClassbookDto> {
        const response = await this.api.client.get('/3/classbook');

        return objectToCamel<ClassbookDto>(response.data);
    }
}
