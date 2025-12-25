import { Api } from '../api/base.api';
import { HomeworkResource } from '../resources/homework.resource';
import { HomeworkCountDto, HomeworkDto } from '../models/homework.model';

export class HomeworkService {
    public readonly resource: HomeworkResource;

    constructor(api: Api) {
        this.resource = new HomeworkResource(api);
    }

    async getHomeworks(): Promise<HomeworkDto[]> {
        return this.resource.getHomeworks();
    }

    async getHomeworksCountActual(): Promise<HomeworkCountDto> {
        return this.resource.getHomeworksCountActual();
    }
}
