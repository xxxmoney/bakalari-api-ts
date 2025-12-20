import { EventResource } from '../resources/events.resource';
import { Api } from '../api/base.api';
import type { EventDto } from '../models/event.model';

export class EventService {
    public readonly resource: EventResource;

    constructor(api: Api) {
        this.resource = new EventResource(api);
    }

    async getEvents(): Promise<EventDto[]> {
        return this.resource.getEvents();
    }

    async getMyEvents(): Promise<EventDto[]> {
        return this.resource.getMyEvents();
    }

    async getPublicEvents(): Promise<EventDto[]> {
        return this.resource.getPublicEvents();
    }
}
