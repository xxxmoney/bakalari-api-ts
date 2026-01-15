import { WebModuleResource } from '../resources/web-module.resource';
import type { Api } from '../api/base.api';

export class WebModuleService {
    public readonly resource: WebModuleResource;

    constructor(api: Api) {
        this.resource = new WebModuleResource(api);
    }
}
