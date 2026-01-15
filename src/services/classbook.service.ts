import { ClassbookResource } from '../resources/classbook.resource';
import type { Api } from '../api/base.api';

export class ClassbookService {
    public readonly resource: ClassbookResource;

    constructor(api: Api) {
        this.resource = new ClassbookResource(api);
    }
}
