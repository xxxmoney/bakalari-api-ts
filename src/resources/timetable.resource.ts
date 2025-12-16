import { DateTime } from 'luxon';
import type { TimeTableResponse } from '../models/timetable-response.model';
import * as constants from '../constants';
import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';

export class TimetableResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getWeekTimetable(date: DateTime): Promise<TimeTableResponse> {
        const formattedDate = date.toFormat(constants.DATE_FORMAT);
        const response = await this.api.client.get('/3/timetable/actual', {
            params: {
                date: formattedDate
            }
        });

        return objectToCamel<TimeTableResponse>(response.data);
    }
}
