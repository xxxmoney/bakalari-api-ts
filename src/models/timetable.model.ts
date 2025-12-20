
export interface TimeTableDto {
    hours: HourItemDto[];
    days: DayItemDto[];
    classes: ClassItemDto[];
    groups: GroupItemDto[];
    subjects: SubjectItemDto[];
    teachers: TeacherItemDto[];
    rooms: RoomItemDto[];
    cycles: CycleItemDto[];
    students: unknown[]; // TODO: specify when known
}

export type ChangeTypeDto =
    | 'Canceled'
    | 'Added'
    | 'Removed'
    | 'RoomChanged'
    | 'Substitution';

export interface ChangeItemDto {
    changeSubject: string | null;
    day: string; // ISO 8601 DateTime string
    hours: string;
    changeType: ChangeTypeDto;
    description: string;
    time: string; // e.g., '8:55 - 9:40'
    typeAbbrev: string | null;
    typeName: string | null;
    atomType: string; // e.g., 'Hour'
}

export interface AtomDto {
    hourId: number;
    groupIds: string[];
    subjectId: string;
    teacherId: string;
    roomId: string;
    isLastRoomLesson: boolean;
    cycleIds: string[];
    change: ChangeItemDto | null;
    homeworkIds: unknown[]; // TODO: specify when known
    homeworks: unknown[]; // TODO: specify when known
    theme: string;
    assistants: unknown[]; // TODO: specify when known
    notice: string;
    lessonRelease: string; // e.g., 'NoChange'
}

export interface HourItemDto {
    id: number;
    caption: string;
    beginTime: string;
    endTime: string;
}

export type DayTypeDto =
    | 'WorkDay'
    | 'Weekend'
    | 'Celebration'
    | 'holiday'
    | 'DirectorDay'
    | 'Undefined';

export interface DayItemDto {
    atoms: AtomDto[];
    assistanceAtoms: unknown[]; // TODO: specify when known
    dayOfWeek: number;
    date: string; // ISO 8601 DateTime string
    dayDescription: string;
    dayType: DayTypeDto; // e.g., 'WorkDay'
}

export interface ClassItemDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface GroupItemDto {
    classId: string;
    id: string;
    abbrev: string;
    name: string;
}

export interface SubjectItemDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface TeacherItemDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface RoomItemDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface CycleItemDto {
    id: string;
    abbrev: string;
    name: string;
}