import type { Api } from '../api/base.api';
import type {
    CertificateTermsDto,
    PedagogicalMeasuresDto, PredictedMarksDto,
    PredictMarksDto,
    SubjectsMarksDto
} from '../models/marks.model';
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

    public async getFinals(): Promise<CertificateTermsDto> {
        const response = await this.api.client.get<CertificateTermsDto>('/3/marks/final');

        return objectToCamel<CertificateTermsDto>(response.data);
    }

    public async getMeasures(): Promise<PedagogicalMeasuresDto> {
        const response = await this.api.client.get<PedagogicalMeasuresDto>('/3/marks/measures');

        return objectToCamel<PedagogicalMeasuresDto>(response.data);
    }

    public async getWhatIfMarks(marks: PredictMarksDto[]): Promise<PredictedMarksDto> {
        const response = await this.api.client.post<PredictedMarksDto>('/3/marks/what-if', marks);

        return objectToCamel<PredictedMarksDto>(response.data);
    }

}
