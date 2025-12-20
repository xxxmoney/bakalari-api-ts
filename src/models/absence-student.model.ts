
export interface Absence {
    percentageThreshold: number;
    absences: AbsenceItem[];
    absencesPerSubject: AbsencePerSubject[];
}

export interface AbsenceItem {
    date: string;
    unsolved: number;
    ok: number;
    missed: number;
    late: number;
    soon: number;
    school: number;
    distanceTeaching: number;
}

export interface AbsencePerSubject {
    subjectName: string;
    lessonsCount: number;
    base: number;
    late: number;
    soon: number;
    school: number;
    distanceTeaching: number;
}
