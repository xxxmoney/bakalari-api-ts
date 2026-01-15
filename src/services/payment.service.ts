import { PaymentResource } from '../resources/payment.resource';
import type { Api } from '../api/base.api';

export class PaymentService {
    public readonly resource: PaymentResource;

    constructor(api: Api) {
        this.resource = new PaymentResource(api);
    }
}
