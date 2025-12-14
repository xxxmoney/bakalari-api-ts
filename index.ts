import * as dotenv from 'dotenv';
import * as api from "./src/api/bakalari.api.ts";
import {DateTime} from "luxon";

// Initialize config
dotenv.config();

await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

const timetable = await api.getTimetable(DateTime.now().startOf('month'));

console.log(JSON.stringify(timetable));
