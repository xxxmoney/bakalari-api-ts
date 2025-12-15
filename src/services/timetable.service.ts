import {DateTime} from "luxon";
import * as api from "../api/bakalari.api";
import * as mapper from "../mappers/timetable.mapper";
import { getStartOfWeeksInMonth } from "../utils/date.utils";
import type {TimeTableSummary} from "../models/timetable-summary.model.js";

/**
 * Get timetable summary for the month of the given date
 * @param currentDay
 */
export async function getMonthTimetableSummary(currentDay: DateTime): Promise<TimeTableSummary> {
    // Authenticate
    await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

    const monthTimetable: TimeTableSummary = { days: [] };

    // TODO: maybe parallelize this?
    for(const date of getStartOfWeeksInMonth(currentDay)) {
        const timetable = await api.getWeekTimetable(date);

        const { days } = mapper.mapTimeTableResponseToSummary(
            timetable
        );

        monthTimetable.days.push(...days);
    }

    return monthTimetable;
}
