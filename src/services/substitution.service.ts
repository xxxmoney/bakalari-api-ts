import { SubstitutionResource } from '../resources/substitution.resource';
import type { Api } from '../api/base.api';

export class SubstitutionService {
    public readonly resource: SubstitutionResource;

    constructor(api: Api) {
        this.resource = new SubstitutionResource(api);
    }
}
