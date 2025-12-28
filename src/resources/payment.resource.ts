import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';
import type {
    ClassfundMonthlyDto,
    ClassfundPaymentsInfoDto,
    ClassfundSummaryDto,
    Sorting
} from '../models/payments.model';

export class PaymentResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getClassfundOverviewPerMonth(search: string, sorting: Sorting = 'desc'): Promise<ClassfundMonthlyDto> {
        const response = await this.api.client.get('/3/payments/classfund', {
            params: {
                sorting: sorting,
                search: search
            }
        });

        return objectToCamel<ClassfundMonthlyDto>(response.data);
    }

    public async getPaymentsInfo(): Promise<ClassfundPaymentsInfoDto> {
        const response = await this.api.client.get('/3/payments/classfund/paymentsinfo');

        return objectToCamel<ClassfundPaymentsInfoDto>(response.data);
    }

    public async getClassfundSentSummary(): Promise<ClassfundSummaryDto> {
        const response = await this.api.client.get('/3/payments/classfund/summary');

        return objectToCamel<ClassfundSummaryDto>(response.data);
    }
}
