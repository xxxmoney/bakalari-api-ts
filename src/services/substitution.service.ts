import { SubstitutionResource } from '../resources/substitution.resource';
import type { Api } from '../api/base.api';
import type { DateTime } from 'luxon';
import { getStartOfWeeksInMonth } from '../utils/date.utils';
import type { SubstitutionsSummary } from '../models/substitution-summary.model';
import * as mapper from '../mappers/substitution.mapper';

export class SubstitutionService {
    public readonly resource: SubstitutionResource;

    constructor(api: Api) {
        this.resource = new SubstitutionResource(api);
    }

    // TODO: fix issue with order of substitutions
    public async getMonthSubstitutions(dayOfMonth: DateTime): Promise<SubstitutionsSummary> {
        const month: SubstitutionsSummary = { substitutions: [] };

        // TODO: maybe parallelize this?
        for (const date of getStartOfWeeksInMonth(dayOfMonth)) {
            const week = await this.resource.getWeekSubstitutions(date);
            const { substitutions } = mapper.mapSubstitutionsToSummary(
                week
            );

            month.substitutions.push(...substitutions);
        }

        return month;
    }
}
