import type { Api } from '../api/base.api';
import type { DateTime } from 'luxon';
import type { SubstitutionsDto } from '../models/substitution.model';
import * as constants from '../constants';
import { objectToCamel } from 'ts-case-convert';

export class SubstitutionResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getWeekSubstitutions(from: DateTime): Promise<SubstitutionsDto> {
        const response = await this.api.client.get('/3/substitutions', {
            params: {
                from: from.toFormat(constants.DATE_FORMAT)
            }
        });

        return objectToCamel<SubstitutionsDto>(response.data);
    }
}
