import { MarkingResource } from '../resources/marking.resource';
import type { Api } from '../api/base.api';

export class MarkingService { 
    public readonly resource: MarkingResource;
    
    constructor(api: Api) {
        this.resource = new MarkingResource(api);
    }
}
