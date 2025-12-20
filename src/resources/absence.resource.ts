import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { Absence } from '../models/absence-student.model';

export class AbsenceResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getStudentAbsences(): Promise<Absence> {
        const response = await this.api.client.get('/3/absence/student');

        return objectToCamel<Absence>(response.data);
    }
}
