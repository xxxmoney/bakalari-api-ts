import { TimetableService } from './services/timetable.service';
import { Api } from './api/base.api';
import type { Credentials } from './models/credentials.model';
import { LoginService } from './services/login.service';

// Export services as single unified service
export class BakalariClient {
    private readonly login: LoginService;

    public readonly timetable: TimetableService;

    constructor(baseUrl: string, credentials: Credentials) {
        const api = new Api(baseUrl);

        this.login = new LoginService(api, credentials);

        this.timetable = new TimetableService(api);
    }

    async initialize() {
        return this.login.authenticate();
    }
}