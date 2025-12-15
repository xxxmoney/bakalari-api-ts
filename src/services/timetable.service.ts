import { DateTime } from 'luxon';
import * as api from '../api/bakalari.api';
import * as mapper from '../mappers/timetable.mapper';
import { getStartOfWeeksInMonth } from '../utils/date.utils';
import type { TimeTableSummary } from '../models/timetable-summary.model.js';

/**
 * Get timetable summary for the month of the given date
 * @param username
 * @param password
 * @param currentDay
 */
export async function getMonthTimetableSummary(username: string, password: string, currentDay: DateTime): Promise<TimeTableSummary> {
    // Authenticate
    await api.login(username || '', password || '');

    const monthTimetable: TimeTableSummary = { days: [] };

    // TODO: maybe parallelize this?
    for (const date of getStartOfWeeksInMonth(currentDay)) {
        const timetable = await api.getWeekTimetable(date);        const { days } = mapper.mapTimeTableResponseToSummary(
            timetable
        );

        monthTimetable.days.push(...days);
    }

    return monthTimetable;
}
