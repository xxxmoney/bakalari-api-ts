
export interface ChangeItemDto {
    ChangeSubject: string | null;
    Day: string; // ISO 8601 DateTime string
    Hours: string;  // e.g., '2. hod'
    ChangeType: string;  // e.g., 'RoomChanged'
    Description: string; // e.g., 'Změna místnosti: 208 (211)'
    Time: string; // e.g., '8:55 - 9:40'
    TypeAbbrev: string | null;
    TypeName: string | null;
    AtomType: string;    // e.g., 'Hour'
}

export interface AtomDto {
    HourId: number;
    GroupIds: string[];
    SubjectId: string;
    TeacherId: string;
    RoomId: string;
    IsLastRoomLesson: boolean;
    CycleIds: string[];
    Change: ChangeItemDto | null;
    HomeworkIds: any[]; // TODO: specify when known
    Homeworks: any[]; // TODO: specify when known
    Theme: string;
    Assistants: any[]; // TODO: specify when known
    Notice: string;
    LessonRelease: string; // e.g., 'NoChange'
}

export interface HourItemDto {
    Id: number;
    Caption: string;
    BeginTime: string;
    EndTime: string;
}

export type DayType =
    | 'WorkDay'
    | 'Weekend'
    | 'Celebration'
    | 'holiday'
    | 'DirectorDay'
    | 'Undefined';

export interface DayItemDto {
    Atoms: AtomDto[];
    AssistanceAtoms: any[]; // TODO: specify when known
    DayOfWeek: number;
    Date: string; // ISO 8601 DateTime string
    DayDescription: string;
    DayType: DayType; // e.g., 'WorkDay'
}

export interface ClassItemDto {
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface GroupItemDto {
    ClassId: string;
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface SubjectItemDto {
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface TeacherItemDto {
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface RoomItemDto {
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface CycleItemDto {
    Id: string;
    Abbrev: string;
    Name: string;
}

export interface TimeTableResponse {
    Hours: HourItemDto[];
    Days: DayItemDto[];
    Classes: ClassItemDto[];
    Groups: GroupItemDto[];
    Subjects: SubjectItemDto[];
    Teachers: TeacherItemDto[];
    Rooms: RoomItemDto[];
    Cycles: CycleItemDto[];
    Students: any[]; // TODO: specify when known
}