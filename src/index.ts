import * as dotenv from 'dotenv';
import * as timetableService from './services/timetable.service.js';

// Load .env
dotenv.config();

const summary = await timetableService.getTimetableSummary();

console.log(JSON.stringify(summary, null, 2));

