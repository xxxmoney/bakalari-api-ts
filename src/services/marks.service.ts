import { MarksResource } from '../resources/marks.resource';
import type { Api } from '../api/base.api';

export class MarksService {
    public readonly resource: MarksResource;

    constructor(api: Api) {
        this.resource = new MarksResource(api);
    }
}
