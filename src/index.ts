import * as dotenv from 'dotenv';
import * as api from "./api/bakalari.api.ts";
import {DateTime} from "luxon";

// Initialize config
dotenv.config();

await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

const timetable = await api.getTimetable(DateTime.fromFormat("14.12.2025", "dd.MM.yyyy"))

console.log(JSON.stringify(timetable));
