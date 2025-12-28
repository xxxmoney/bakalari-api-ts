import { Api } from '../api/base.api';
import { HomeworkResource } from '../resources/homework.resource';
import type { HomeworkCountDto, HomeworksDto } from '../models/homework.model';
import { DateTime } from 'luxon';

export class HomeworkService {
    public readonly resource: HomeworkResource;

    constructor(api: Api) {
        this.resource = new HomeworkResource(api);
    }
}
