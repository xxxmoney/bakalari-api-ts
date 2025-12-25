import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';
import type { HomeworkCountDto, HomeworksDto } from '../models/homework.model';

export class HomeworkResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getHomeworks(): Promise<HomeworksDto> {
        const response = await this.api.client.get<HomeworksDto>('/3/homeworks');
        return objectToCamel<HomeworksDto>(response.data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getHomeworksCountActual(): Promise<any> { // TODO: Define return type
        const response = await this.api.client.get<HomeworkCountDto>('/3/homeworks/count-actual');
        return objectToCamel<any>(response.data);
    }
}
