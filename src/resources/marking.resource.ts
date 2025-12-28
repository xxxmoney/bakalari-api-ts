import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type { AtomsDto, MarkingsDto } from '../models/marking.model';

export class MarkingResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getAtomClasses(): Promise<AtomsDto> {
        const response = await this.api.client.get<AtomsDto>('/3/marking/atoms');

        return objectToCamel<AtomsDto>(response.data);
    }

    async getMarkingsForClass(atomClassId: string): Promise<MarkingsDto> {
        const response = await this.api.client.get<any>(`/3/marking/marks/${atomClassId}`);

        return objectToCamel<MarkingsDto>(response.data);
    }
}
