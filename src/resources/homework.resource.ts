import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';
import type { HomeworkCountDto, HomeworksDto } from '../models/homework.model';
import type { DateTime } from 'luxon';
import * as constants from '../constants';

export class HomeworkResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getHomeworks(from: DateTime, to: DateTime): Promise<HomeworksDto> {
        const response = await this.api.client.get<HomeworksDto>('/3/homeworks', {
            params: {
                from: from.toFormat(constants.DATE_FORMAT),
                to: to.toFormat(constants.DATE_FORMAT)
            }
        });

        return objectToCamel<HomeworksDto>(response.data);
    }

    public async getHomeworksCountActual(): Promise<HomeworkCountDto> { // TODO: Define return type
        const response = await this.api.client.get<HomeworkCountDto>('/3/homeworks/count-actual');

        return objectToCamel<HomeworkCountDto>(response.data);
    }
}
