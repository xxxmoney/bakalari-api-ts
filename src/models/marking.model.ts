
export interface AtomsDto {
    atoms: AtomDto[];
}

export interface AtomDto {
    id: string;
    name: string;
    subject: AtomSubjectDto;
    disabled: boolean;
    disabledText: string | null;
}

export interface AtomSubjectDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface MarksDto {
    markOptions: MarkOptionDto[];
    marks: MarkValueDto[];
    students: StudentDto[];
    teachers: TeacherDto[];
}

export interface MarkOptionDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface MarkValueDto {
    id: string;
    markDate: string;
    editDate: string;
    teacherId: string;
    headerId: string;
    markValue: string;
    theme: string;
    studentId: string;
    readOnly: boolean;
    readOnlyDescription: string | null;
    publishDate: string | null;
    confirmedWhen: string | null;
    confirmedBy: string | null;
    markConfirmationState: string;
}

export interface StudentDto {
    id: string;
    classId: string;
    displayName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    registrationNumber: string;
    averageText1: string;
    averageText2: string;
    releasedOfSubject: boolean;
}

export interface TeacherDto {
    id: string;
    abbrev: string;
    name: string;
}
