
export interface TimeTableResponse {
    hours: HourItem[];
    days: DayItem[];
    classes: ClassItem[];
    groups: GroupItem[];
    subjects: SubjectItem[];
    teachers: TeacherItem[];
    rooms: RoomItem[];
    cycles: CycleItem[];
    students: any[]; // TODO: specify when known
}


export interface ChangeItemDto {
    changeSubject: string | null;
    day: string; // ISO 8601 DateTime string
    hours: string;
    changeType: string;
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
    homeworkIds: any[]; // TODO: specify when known
    homeworks: any[]; // TODO: specify when known
    theme: string;
    assistants: any[]; // TODO: specify when known
    notice: string;
    lessonRelease: string; // e.g., 'NoChange'
}

export interface HourItem {
    id: number;
    caption: string;
    beginTime: string;
    endTime: string;
}

export type DayType =
    | 'WorkDay'
    | 'Weekend'
    | 'Celebration'
    | 'holiday'
    | 'DirectorDay'
    | 'Undefined';

export interface DayItem {
    atoms: AtomDto[];
    assistanceAtoms: any[]; // TODO: specify when known
    dayOfWeek: number;
    date: string; // ISO 8601 DateTime string
    dayDescription: string;
    dayType: DayType; // e.g., 'WorkDay'
}

export interface ClassItem {
    id: string;
    abbrev: string;
    name: string;
}

export interface GroupItem {
    classId: string;
    id: string;
    abbrev: string;
    name: string;
}

export interface SubjectItem {
    id: string;
    abbrev: string;
    name: string;
}

export interface TeacherItem {
    id: string;
    abbrev: string;
    name: string;
}

export interface RoomItem {
    id: string;
    abbrev: string;
    name: string;
}

export interface CycleItem {
    id: string;
    abbrev: string;
    name: string;
}