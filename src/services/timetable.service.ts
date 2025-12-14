import {DateTime} from "luxon";
import * as api from "../api/bakalari.api.ts";
import * as mapper from "../mappers/timetable.mapper.ts";

export async function getTimetableSummary() {
    // Authenticate
    await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

    // Get timetable for current month and convert it to correct format
    const response = await api.getTimetable(DateTime.now().startOf('month'));
    return mapper.mapTimeTableResponseToSummary(response);
}
