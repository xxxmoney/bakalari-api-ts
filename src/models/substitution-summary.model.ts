
export interface SubstitutionsSummary {
    substitutions: Substitution[];
}

export interface Substitution {
    day: string;
    hours: string;
    changeType: string;
    description: string;
    time: string;
}
