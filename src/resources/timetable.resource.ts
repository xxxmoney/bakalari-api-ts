import { DateTime } from 'luxon';
import type { TimeTableResponseDto } from '../models/timetable-response.model';
import * as constants from '../constants';
import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';

export class TimetableResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getWeekTimetable(date: DateTime): Promise<TimeTableResponseDto> {
        const formattedDate = date.toFormat(constants.DATE_FORMAT);
        const response = await this.api.client.get('/3/timetable/actual', {
            params: {
                date: formattedDate
            }
        });

        return objectToCamel<TimeTableResponseDto>(response.data);
    }
}
