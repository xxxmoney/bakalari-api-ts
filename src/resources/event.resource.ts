import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { EventsDto } from '../models/event.model';
import type { DateTime } from 'luxon';
import * as constants from '../constants';

export class EventResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getEvents(from: DateTime | null = null): Promise<EventsDto> {
        const formattedFrom = this.formatDate(from);
        const response = await this.api.client.get('/3/events', {
            params: {
                from: formattedFrom
            }
        });

        return objectToCamel<EventsDto>(response.data);
    }

    public async getMyEvents(from: DateTime | null = null): Promise<EventsDto> {
        const formattedFrom = this.formatDate(from);
        const response = await this.api.client.get('/3/events/my', {
            params: {
                from: formattedFrom
            }
        });

        return objectToCamel<EventsDto>(response.data);
    }

    public async getPublicEvents(from: DateTime | null = null): Promise<EventsDto> {
        const formattedFrom = this.formatDate(from);
        const response = await this.api.client.get('/3/events/public', {
            params: {
                from: formattedFrom
            }
        });

        return objectToCamel<EventsDto>(response.data);
    }

    private formatDate(date: DateTime | null = null): string | null {
        return date ? date.toFormat(constants.DATE_FORMAT) : null;
    }
}
