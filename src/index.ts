import * as dotenv from 'dotenv';
import * as timetableService from './services/timetable.service.js';

// Load .env
dotenv.config();

const timetableSummary = await timetableService.getTimetableSummary();

console.log(JSON.stringify(timetableSummary, null, 2));

