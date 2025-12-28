import type { Api } from '../api/base.api';
import { SubjectsResource } from '../resources/subjects.resource';

export class SubjectsService {
    public readonly resource: SubjectsResource;

    constructor(api: Api) {
        this.resource = new SubjectsResource(api);
    }
}
