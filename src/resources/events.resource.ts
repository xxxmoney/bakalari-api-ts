import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';
import type { EventDto } from '../models/event.model';

export class EventResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getEvents(): Promise<EventDto[]> {
        const response = await this.api.client.get('/3/events');

        return objectToCamel<EventDto[]>(response.data);
    }

    async getMyEvents(): Promise<EventDto[]> {
        const response = await this.api.client.get('/3/events/my');

        return objectToCamel<EventDto[]>(response.data);
    }

    async getPublicEvents(): Promise<EventDto[]> {
        const response = await this.api.client.get('/3/events/public');

        return objectToCamel<EventDto[]>(response.data);
    }
}
