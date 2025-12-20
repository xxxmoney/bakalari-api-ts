import { EventResource } from '../resources/event.resource';
import { Api } from '../api/base.api';

export class EventService {
    public readonly resource: EventResource;

    constructor(api: Api) {
        this.resource = new EventResource(api);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getEvents(): Promise<any> {
        return this.resource.getEvents();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getMyEvents(): Promise<any> {
        return this.resource.getMyEvents();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getPublicEvents(): Promise<any> {
        return this.resource.getPublicEvents();
    }
}
