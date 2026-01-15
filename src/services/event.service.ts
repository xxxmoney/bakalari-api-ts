import { EventResource } from '../resources/event.resource';
import { Api } from '../api/base.api';

export class EventService {
    public readonly resource: EventResource;

    constructor(api: Api) {
        this.resource = new EventResource(api);
    }
}
