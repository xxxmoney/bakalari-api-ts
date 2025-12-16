import { TimetableResource } from '../resources/timetable.resource';
import { Api } from '../api/base.api';
import type { DateTime } from 'luxon';
import type { TimeTableSummary } from '../models/timetable-summary.model';
import { getStartOfWeeksInMonth } from '../utils/date.utils';
import * as mapper from '../mappers/timetable.mapper';

export class TimetableService {
    private readonly timetableResource: TimetableResource;

    constructor(api: Api) {
        this.timetableResource = new TimetableResource(api);
    }

    /**
     * Get timetable summary for the month of the given date
     * @param currentDay
     */
    async getMonthTimetableSummary(currentDay: DateTime): Promise<TimeTableSummary> {
        const monthTimetable: TimeTableSummary = { days: [] };

        // TODO: maybe parallelize this?
        for (const date of getStartOfWeeksInMonth(currentDay)) {
            const timetable = await this.timetableResource.getWeekTimetable(date);
            const { days } = mapper.mapTimeTableResponseToSummary(
                timetable
            );

            monthTimetable.days.push(...days);
        }

        return monthTimetable;
    }

}
