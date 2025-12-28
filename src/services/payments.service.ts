import { PaymentsResource } from '../resources/payments.resource';
import type { Api } from '../api/base.api';

export class PaymentsService {
    public readonly resource: PaymentsResource;

    constructor(api: Api) {
        this.resource = new PaymentsResource(api);
    }
}
