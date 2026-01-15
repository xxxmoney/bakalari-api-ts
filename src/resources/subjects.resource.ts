import type { Api } from '../api/base.api';
import type { SubjectsDto, SubjectThemesDto } from '../models/subjects.model';
import { objectToCamel } from 'ts-case-convert';

export class SubjectsResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getSubjects(): Promise<SubjectsDto> {
        const response = await this.api.client.get('/3/subjects');

        return objectToCamel<SubjectsDto>(response.data);
    }

    public async getSubjectThemes(subjectId: string): Promise<SubjectThemesDto> {
        const response = await this.api.client.get(`/3/subjects/themes/${subjectId}`);

        return objectToCamel<SubjectThemesDto>(response.data);
    }
}
