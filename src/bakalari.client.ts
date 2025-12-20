import { TimetableService } from './services/timetable.service';
import { Api } from './api/base.api';
import type { Credentials } from './models/credentials.model';
import { LoginService } from './services/login.service';
import { AbsenceService } from './services/absence.service';
import { ClassbookService } from './services/classbook.service';

// Export services as single unified service
export class BakalariClient {
    private readonly login: LoginService;

    public readonly timetable: TimetableService;
    public readonly absence: AbsenceService;
    public readonly classbook: ClassbookService;

    constructor(baseUrl: string, credentials: Credentials) {
        const api = new Api(baseUrl);

        this.login = new LoginService(api, credentials);

        this.timetable = new TimetableService(api);
        this.absence = new AbsenceService(api);
        this.classbook = new ClassbookService(api);
    }

    async authenticate() {
        await this.login.authenticate();
    }
}
