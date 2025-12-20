
export interface Classbook {
    days: ClassbookDay[];
    hours: ClassbookHour[];
}

export interface ClassbookDay {
    date: string;
    dayOfWeek: number;
    dayDescription: string;
    dayType: string;
    hours: unknown[];
}

export interface ClassbookHour {
    id: number;
    caption: string;
    beginTime: string;
    endTime: string;
}
