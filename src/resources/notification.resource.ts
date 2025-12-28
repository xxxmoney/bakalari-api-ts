import type { Api } from '../api/base.api';

export class NotificationResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async registerNotification(data: any): Promise<any> { // TODO: Define type
        const response = await this.api.client.post('/3/register-notification', data);

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async unregisterNotification(data: any): Promise<any> { // TODO: Define type
        const response = await this.api.client.delete('/3/unregister-user-notification', data);

        return response.data;
    }
}
