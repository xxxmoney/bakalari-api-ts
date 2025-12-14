import {type DateTime} from 'luxon';

export interface TimeTableSummary {
    days: Day[];
}

export interface Day {
    date: DateTime;
    hours: Hour[];
}

export interface Hour {
    description: string;
    subject: string;
    classes: string[];
    beginTime: string; // In format 'HH:mm'
    endTime: string; // In format 'HH:mm'
}

