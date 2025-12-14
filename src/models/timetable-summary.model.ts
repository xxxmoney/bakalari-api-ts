import {type DateTime, Duration} from 'luxon';

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
    class: string;
    beginTime: Duration;
    endTime: Duration;
}

