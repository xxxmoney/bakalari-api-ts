import { GdprResource } from '../resources/gdpr.resource';
import { Api } from '../api/base.api';

export class GdprService {
    public readonly resource: GdprResource;

    constructor(api: Api) {
        this.resource = new GdprResource(api);
    }
}
