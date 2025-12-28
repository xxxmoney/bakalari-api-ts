
export interface SubjectsMarksDto {
    subjects: SubjectMarksDto[];
}

export interface CertificateTermsDto {
    certificateTerms: CertificateTermDto[];
}

export interface PedagogicalMeasuresDto {
    pedagogicalMeasures: PedagogicalMeasureDto[];
}

export interface SubjectMarksDto {
    marks: MarkItemDto[];
    subject: SubjectInfoDto;
    averageText: string;
    temporaryMark: string;
    subjectNote: string;
    temporaryMarkNote: string;
    pointsOnly: boolean;
    markPredictionEnabled: boolean;
}

export interface CertificateTermDto {
    finalMarks: FinalMarkDto[];
    subjects: SubjectInfoDto[];
    gradeName: string;
    grade: number;
    yearInSchool: number;
    schoolYear: string;
    semester: string;
    semesterName: string;
    repeated: boolean;
    closed: boolean;
    achievementText: string;
    marksAverage: number;
    absentHours: number;
    notExcusedHours: number;
    certificateDate: string;
}

export interface PedagogicalMeasureDto {
    schoolYear: string;
    semester: string;
    typeLabel: string;
    date: string;
    typeId: string;
    text: string;
}

export interface MarkItemDto {
    markDate: string;
    editDate: string;
    caption: string;
    theme: string;
    markText: string;
    teacherId: string;
    type: string;
    typeNote: string;
    weight: number | null;
    subjectId: string;
    isNew: boolean;
    isPoints: boolean;
    calculatedMarkText: string;
    classRankText: string | null;
    id: string;
    pointsText: string;
    maxPoints: number;
}

export interface SubjectInfoDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface FinalMarkDto {
    markDate: string;
    editDate: string;
    markText: string;
    subjectId: string;
    id: string;
}
