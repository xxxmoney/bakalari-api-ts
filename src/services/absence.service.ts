import { AbsenceResource } from '../resources/absence.resource';
import type { Api } from '../api/base.api';

export class AbsenceService {
    public readonly resource: AbsenceResource;

    constructor(api: Api) {
        this.resource = new AbsenceResource(api);
    }
}
