import { Api } from '../api/base.api';
import { HomeworkResource } from '../resources/homework.resource';
import type { HomeworkCountDto, HomeworksDto } from '../models/homework.model';
import { DateTime } from 'luxon';

export class HomeworkService {
    public readonly resource: HomeworkResource;

    constructor(api: Api) {
        this.resource = new HomeworkResource(api);
    }

    async getHomeworks(from: DateTime, to: DateTime): Promise<HomeworksDto> {
        return this.resource.getHomeworks(from, to);
    }

    async getHomeworksCountActual(): Promise<HomeworkCountDto> {
        return this.resource.getHomeworksCountActual();
    }
}
