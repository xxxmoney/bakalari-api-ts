import type { Api } from '../api/base.api';
import { NotificationResource } from '../resources/notification.resource';

export class NotificationService {
    public readonly resource: NotificationResource;

    constructor(api: Api) {
        this.resource = new NotificationResource(api);
    }
}
