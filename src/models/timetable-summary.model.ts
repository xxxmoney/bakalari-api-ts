import { type DateTime } from 'luxon';

export interface TimeTableSummary {
    days: Day[];
}

// TODO: define as enum
export type DayType =
    | 'WorkDay'
    | 'Weekend'
    | 'Celebration'
    | 'holiday'
    | 'DirectorDay'
    | 'Undefined';

export interface Day {
    date: DateTime;
    hours: Hour[];
    dayType: DayType;
}

// TODO: define as enum
export type ChangeType =
    | 'Canceled'
    | 'Added'
    | 'Removed'
    | 'RoomChanged'
    | 'Substitution';

export interface Hour {
    changeType: ChangeType | null;
    description: string;
    subject: string;
    classes: string[];
    beginTime: string; // In format 'HH:mm'
    endTime: string; // In format 'HH:mm'
}
