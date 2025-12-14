import {DateTime} from "luxon";
import * as api from "../api/bakalari.api.ts";
import * as mapper from "../mappers/timetable.mapper.ts";
import { getStartOfWeeksInMonth } from "../utils/date.utils.ts";
import type {TimeTableSummary} from "../models/timetable-summary.model.js";

/**
 * Get timetable summary for the month of the given date
 * @param currentDay
 */
export async function getMonthTimetableSummary(currentDay: DateTime): Promise<TimeTableSummary> {
    // Authenticate
    await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

    const monthTimetable: TimeTableSummary = { days: [] };

    for(let date of getStartOfWeeksInMonth(currentDay)) {
        const { days } = mapper.mapTimeTableResponseToSummary(
            await api.getWeekTimetable(date)
        );

        monthTimetable.days.push(...days);
    }

    return monthTimetable;
}
