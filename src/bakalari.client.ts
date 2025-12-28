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
import { MarksService } from './services/marks.service';
import { PaymentService } from './services/payment.service';
import { NotificationService } from './services/notification.service';
import { SubjectsService } from './services/subjects.service';
import { SubstitutionService } from './services/substitution.service';

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
    public readonly marks: MarksService;
    public readonly payments: PaymentService;
    public readonly notification: NotificationService;
    public readonly subjects: SubjectsService;
    public readonly substitutions: SubstitutionService;

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
        this.marks = new MarksService(api);
        this.payments = new PaymentService(api);
        this.notification = new NotificationService(api);
        this.subjects = new SubjectsService(api);
        this.substitutions = new SubstitutionService(api);
    }

    public async authenticate() {
        await this.login.authenticate();
    }
}
