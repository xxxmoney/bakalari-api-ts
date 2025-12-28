import type { Api } from '../api/base.api';
import type { SubjectsMarksDto } from '../models/marks.model';
import { objectToCamel } from 'ts-case-convert';

export class MarksResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getSubjectsMarks(): Promise<SubjectsMarksDto> {
        const response = await this.api.client.get<SubjectsMarksDto>('/3/marks');

        return objectToCamel<SubjectsMarksDto>(response.data);
    }

    public async getNewMarksCount(): Promise<number> {
        const response = await this.api.client.get<number>('/3/marks/count-new');

        return response.data;
    }

}
