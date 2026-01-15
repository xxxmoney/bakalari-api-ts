
export interface AbsencesDto {
    percentageThreshold: number;
    absences: AbsenceDto[];
    absencesPerSubject: AbsencePerSubjectDto[];
}

export interface AbsenceDto {
    date: string;
    unsolved: number;
    ok: number;
    missed: number;
    late: number;
    soon: number;
    school: number;
    distanceTeaching: number;
}

export interface AbsencePerSubjectDto {
    subjectName: string;
    lessonsCount: number;
    base: number;
    late: number;
    soon: number;
    school: number;
    distanceTeaching: number;
}
