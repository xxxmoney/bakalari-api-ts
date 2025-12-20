import type { Api } from '../api/base.api';

export class EventResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getEvents(): Promise<any> { // TODO: Define return type
        const response = await this.api.client.get('/3/events');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getMyEvents(): Promise<any> { // TODO: Define return type
        const response = await this.api.client.get('/3/events/my');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getPublicEvents(): Promise<any> { // TODO: Define return type
        const response = await this.api.client.get('/3/events/public');

        return response.data;
    }
}
