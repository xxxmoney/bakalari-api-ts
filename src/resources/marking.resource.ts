import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { AtomsDto, MarksDto } from '../models/marking.model';

export class MarkingResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getAtomClasses(): Promise<AtomsDto> {
        const response = await this.api.client.get('/3/marking/atoms');

        return objectToCamel<AtomsDto>(response.data);
    }

    async getMarksForClass(atomClassId: string): Promise<MarksDto> {
        const response = await this.api.client.get(`/3/marking/marks/${atomClassId}`);

        return objectToCamel<MarksDto>(response.data);
    }
}
