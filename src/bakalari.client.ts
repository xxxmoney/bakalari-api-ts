import { TimetableService } from './services/timetable.service';
import { Api } from './api/base.api';
import type { Credentials } from './models/credentials.model';
import { LoginService } from './services/login.service';
import { AbsenceService } from './services/absence.service';
import { ClassbookService } from './services/classbook.service';
import { EventService } from './services/event.service';
import { GdprService } from './services/gdpr.service';
import { HomeworkService } from './services/homework.service';
import { KomensService } from './services/komens.service';
import { MarkingService } from './services/marking.service';

// Export services as single unified service
export class BakalariClient {
    public readonly login: LoginService;
    public readonly timetable: TimetableService;
    public readonly absence: AbsenceService;
    public readonly classbook: ClassbookService;
    public readonly event: EventService;
    public readonly gdpr: GdprService;
    public readonly homework: HomeworkService;
    public readonly komens: KomensService;
    public readonly marking: MarkingService;

    constructor(baseUrl: string, credentials: Credentials) {
        const api = new Api(baseUrl);

        this.login = new LoginService(api, credentials);
        this.timetable = new TimetableService(api);
        this.absence = new AbsenceService(api);
        this.classbook = new ClassbookService(api);
        this.event = new EventService(api);
        this.gdpr = new GdprService(api);
        this.homework = new HomeworkService(api);
        this.komens = new KomensService(api);
        this.marking = new MarkingService(api);
    }

    async authenticate() {
        await this.login.authenticate();
    }
}
