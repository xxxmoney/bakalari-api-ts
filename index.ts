import * as dotenv from 'dotenv';
import * as api from "./src/api/bakalari.api.ts";
import {DateTime} from "luxon";
import {objectToCamel} from "ts-case-convert";

// Initialize config
dotenv.config();

// const camel = objectToCamel({Name: 'test', Value: 25});
// console.log(camel)

await api.login(process.env.APP_USERNAME || '', process.env.APP_PASSWORD || '');

const timetable = await api.getTimetable(DateTime.now().startOf('month'));

console.log(timetable);
