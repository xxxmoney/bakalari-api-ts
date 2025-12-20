import { DateTime } from 'luxon';
import type { TimeTableDto } from '../models/timetable.model';
import * as constants from '../constants';
import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';

export class TimetableResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getWeekTimetable(date: DateTime): Promise<TimeTableDto> {
        const formattedDate = date.toFormat(constants.DATE_FORMAT);
        const response = await this.api.client.get('/3/timetable/actual', {
            params: {
                date: formattedDate
            }
        });

        return objectToCamel<TimeTableDto>(response.data);
    }
}
