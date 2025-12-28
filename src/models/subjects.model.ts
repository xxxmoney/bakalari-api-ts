
export interface SubjectsDto {
    subjects: SubjectDto[];
}

export interface SubjectThemesDto {
    subject: SubjectInfoDto;
    themes: SubjectThemeDto[];
}

export interface SubjectDto {
    subjectId: string;
    subjectName: string;
    subjectAbbrev: string;
    teacherId: string;
    teacherName: string;
    teacherAbbrev: string;
    teacherEmail: string;
    teacherWeb: string;
    teacherSchoolPhone: string | null;
    teacherHomePhone: string | null;
    teacherMobilePhone: string | null;
}

export interface SubjectInfoDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface SubjectThemeDto {
    date: string;
    theme: string;
    note: string;
    hourCaption: string;
    lessonLabel: string;
}
