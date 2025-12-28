import type { SubstitutionsSummary } from '../models/substitution-summary.model';
import type { SubstitutionsDto } from '../models/substitution.model';

export function mapSubstitutionsToSummary(substitutions: SubstitutionsDto): SubstitutionsSummary {
    return {
        substitutions: substitutions.changes.map(change => ({
            day: change.day,
            hours: change.hours,
            changeType: change.changeType,
            description: change.description,
            time: change.time,
        }))
    };
}
