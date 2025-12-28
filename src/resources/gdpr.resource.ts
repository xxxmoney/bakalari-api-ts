import type { Api } from '../api/base.api';

export class GdprResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async getCommissioner(): Promise<any> { // TODO: Define type
        const response = await this.api.client.get('/3/gdpr/commissioner');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async sendObjection(data: any): Promise<any> { // TODO: Define body and return type
        const response = await this.api.client.post('/3/gdpr/commissioner/send-objection', data);

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async sendReport(data: any): Promise<any> { // TODO: Define body and return type
        const response = await this.api.client.post('/3/gdpr/commissioner/send-report', data);

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async getCommissioners(): Promise<any> { // TODO: Define type
        const response = await this.api.client.get('/3/gdpr/commissioners');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async getConsent(): Promise<any> { // TODO: Define type
        const response = await this.api.client.get('/3/gdpr/consent');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async getPersonConsents(): Promise<any> { // TODO: Define type
        const response = await this.api.client.get('/3/gdpr/consents/person');

        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async getPersonChildConsents(): Promise<any> { // TODO: Define type
        const response = await this.api.client.get('/3/gdpr/consents/person/child');

        return response.data;
    }
}
