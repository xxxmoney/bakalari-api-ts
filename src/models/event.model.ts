
export interface EventsDto {
    events: EventDto[];
}

export interface EventDto {
    id: string;
    title: string;
    description: string;
    times: EventTimeDto[];
    eventType: EventTypeDto;
    classes: EventEntityDto[];
    classSets: EventEntityDto[];
    teachers: EventEntityDto[];
    teacherSets: EventEntityDto[];
    rooms: EventEntityDto[];
    roomSets: EventEntityDto[];
    students: EventEntityDto[];
    note: string | null;
    dateChanged: string;
}

export interface EventTimeDto {
    wholeDay: boolean;
    startTime: string;
    endTime: string;
}

export interface EventTypeDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface EventEntityDto {
    id: string;
    abbrev: string;
    name: string;
}
