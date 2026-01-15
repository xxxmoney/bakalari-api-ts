import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { AbsencesDto } from '../models/absence-student.model';

export class AbsenceResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getStudentAbsences(): Promise<AbsencesDto> {
        const response = await this.api.client.get('/3/absence/student');

        return objectToCamel<AbsencesDto>(response.data);
    }
}
