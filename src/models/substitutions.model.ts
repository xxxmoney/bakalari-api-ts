
export interface SubstitutionsDto {
    from: string;
    to: string;
    changes: SubstitutionDto[];
}

export interface SubstitutionDto {
    changeSubject: string | null;
    day: string;
    hours: string;
    changeType: string;
    description: string;
    time: string;
    typeAbbrev: string | null;
    typeName: string | null;
}
