import { GdprResource } from '../resources/gdpr.resource';
import { Api } from '../api/base.api';

export class GdprService {
    public readonly resource: GdprResource;

    constructor(api: Api) {
        this.resource = new GdprResource(api);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getCommissioner(): Promise<any> {
        return this.resource.getCommissioner();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async sendObjection(data: any): Promise<any> {
        return this.resource.sendObjection(data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async sendReport(data: any): Promise<any> {
        return this.resource.sendReport(data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getCommissioners(): Promise<any> {
        return this.resource.getCommissioners();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getConsent(): Promise<any> {
        return this.resource.getConsent();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getPersonConsents(): Promise<any> {
        return this.resource.getPersonConsents();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getPersonChildConsents(): Promise<any> {
        return this.resource.getPersonChildConsents();
    }
}
