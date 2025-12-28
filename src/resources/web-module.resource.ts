import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { WebModulesDto } from '../models/webmodule.model';

export class WebModuleResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getWebModules(): Promise<WebModulesDto> {
        const response = await this.api.client.get<WebModulesDto>('/3/webmodule');

        return objectToCamel<WebModulesDto>(response.data);
    }
}
