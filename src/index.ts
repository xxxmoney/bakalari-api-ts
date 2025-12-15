import * as dotenv from 'dotenv';
import * as timetableService from './services/timetable.service.js';
import {DateTime} from "luxon";

// Load .env
dotenv.config();

const summary = await timetableService.getMonthTimetableSummary(DateTime.now());

console.log(JSON.stringify(summary, null, 2));

