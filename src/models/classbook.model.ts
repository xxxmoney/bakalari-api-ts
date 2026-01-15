
export interface ClassbookDto {
    days: ClassbookDayDto[];
    hours: ClassbookHourDto[];
}

export interface ClassbookDayDto {
    date: string;
    dayOfWeek: number;
    dayDescription: string;
    dayType: string;
    hours: unknown[]; // TODO: Define
}

export interface ClassbookHourDto {
    id: number;
    caption: string;
    beginTime: string;
    endTime: string;
}
