import type { Api } from '../api/base.api';
import { KomensResource } from '../resources/komens.resource';

export class KomensService {
    public readonly resource: KomensResource;

    constructor(api: Api) {
        this.resource = new KomensResource(api);
    }
}
