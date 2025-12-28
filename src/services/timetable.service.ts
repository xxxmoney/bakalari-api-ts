import { TimetableResource } from '../resources/timetable.resource';
import { Api } from '../api/base.api';
import type { DateTime } from 'luxon';
import type { TimeTableSummary } from '../models/timetable-summary.model';
import { getStartOfWeeksInMonth } from '../utils/date.utils';
import * as mapper from '../mappers/timetable.mapper';

export class TimetableService {
    public readonly resource: TimetableResource;

    constructor(api: Api) {
        this.resource = new TimetableResource(api);
    }

    public async getMonthTimetableSummary(dayOfMonth: DateTime): Promise<TimeTableSummary> {
        const month: TimeTableSummary = { days: [] };

        // TODO: maybe parallelize this?
        for (const date of getStartOfWeeksInMonth(dayOfMonth)) {
            const week = await this.resource.getWeekTimetable(date);
            const { days } = mapper.mapTimeTableResponseToSummary(
                week
            );

            month.days.push(...days);
        }

        return month;
    }

}
