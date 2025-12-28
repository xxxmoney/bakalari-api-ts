
export interface SubjectsMarksDto {
    subjects: SubjectMarksDto[];
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
