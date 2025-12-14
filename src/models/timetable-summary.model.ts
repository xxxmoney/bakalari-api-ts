import {type DateTime} from 'luxon';
import type {ChangeType, DayType} from "./timetable-shared.model.js";

export interface TimeTableSummary {
    days: Day[];
}

export interface Day {
    date: DateTime;
    hours: Hour[];
    dayType: DayType;
}

export interface Hour {
    changeType: ChangeType | null;
    description: string;
    subject: string;
    classes: string[];
    beginTime: string; // In format 'HH:mm'
    endTime: string; // In format 'HH:mm'
}

