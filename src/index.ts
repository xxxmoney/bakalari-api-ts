// Define the "barrel file" - simplify imports for consumer of the package

// Export models
import { TimetableService } from './services/timetable.service';
import { Api } from './api/base.api';
import type { Credentials } from './models/credentials.model';
import { LoginService } from './services/login.service';

export * from './models/login.model';

export * from './models/credentials.model';

export * from './models/timetable-response.model';

export * from './models/timetable-summary.model';

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
