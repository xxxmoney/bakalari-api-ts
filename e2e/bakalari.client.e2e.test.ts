import type { MessageSpecificType, MessageType, MessageUnreadType } from '../src/models/komens.model';

jest.unmock('axios');

import { BakalariClient } from '../src';
import { DateTime } from 'luxon';
import dotenv from 'dotenv';

beforeAll(() => {
    // Copy .env.example to .env and fill in the values before running e2e tests
    dotenv.config();
});

describe('BakalariClient.login.resource', () => {
    test('getLoginToken', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.login.resource.getLoginToken();

        //
        // Assert
        //
        console.log(result);
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.timetable', () => {
    test('getMonthTimetableSummary', async () => {
        //
        // Arrange
        //
        const date = DateTime.fromISO('2025-12-01');
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.timetable.getMonthTimetableSummary(date);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.timetable.resource', () => {
    test('getWeekTimetable', async () => {
        //
        // Arrange
        //
        const date = DateTime.fromISO('2025-12-01');
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.timetable.resource.getWeekTimetable(date);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.absence.resource', () => {
    test('getStudentAbsences', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.absence.resource.getStudentAbsences();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.classbook.resource', () => {
    test('getClassbooks', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.classbook.resource.getClassbooks();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.event.resource', () => {
    test('getEvents', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });
        const date = DateTime.fromISO('2025-12-01');

        //
        // Act
        //
        await client.authenticate();
        const result = await client.event.resource.getEvents(date);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getMyEvents', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.event.resource.getMyEvents();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getPublicEvents', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.event.resource.getPublicEvents();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.gdpr.resource', () => {
    test('getCommissioner', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.getCommissioner();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('sendObjection', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.sendObjection({});

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('sendReport', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.sendReport({});

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getCommissioners', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.getCommissioners();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getConsent', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.getConsent();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getPersonConsents', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.getPersonConsents();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getPersonChildConsents', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.gdpr.resource.getPersonChildConsents();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.homework.resource', () => {
    test('getHomeworks', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });
        const from = DateTime.fromISO('2025-12-01');
        const to = DateTime.fromISO('2025-12-05');

        //
        // Act
        //
        await client.authenticate();
        const result = await client.homework.resource.getHomeworks(from, to);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getHomeworksCountActual', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.homework.resource.getHomeworksCountActual();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.komens.resource', () => {
    test.each([
        ['apology'],
        ['noticeboard'],
        ['rating'],
        ['received'],
        ['sent']
    ])('getMessages', async (type: string) => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.komens.resource.getMessages(type as MessageType);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test.each([
        ['received'],
        ['sent']
    ])('getMessageForType', async (type: string) => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const messages = await client.komens.resource.getMessages(type as MessageType);

        if (messages.messages.length > 0) {
            const messageId = messages.messages[0].id;
            const result = await client.komens.resource.getMessageForType(messageId, type as MessageSpecificType);

            //
            // Assert
            //
            console.log(JSON.stringify(result, null, 2));
            expect(result).toBeDefined();
        } else {
            console.warn('No data found');
        }
    });

    test.each([
        ['noticeboard'],
        ['received']
    ])('getUnreadMessagesCount', async (type: string) => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.komens.resource.getUnreadMessagesCount(type as MessageUnreadType);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getMessageTypes', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.komens.resource.getMessageTypes();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getRatingTemplates', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.komens.resource.getRatingTemplates();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.marking.resource', () => {
    test('getAtomClasses', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marking.resource.getAtomClasses();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getMarkingsForClass', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marking.resource.getAtomClasses();

        if (result.atoms.length > 0) {
            const markId = result.atoms[0].id;
            const atom = await client.marking.resource.getMarksForClass(markId);

            //
            // Assert
            //
            console.log(JSON.stringify(atom, null, 2));
            expect(atom).toBeDefined();
        } else {
            console.warn('No data found');
        }

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.marks.resource', () => {
    test('getSubjectsmarks', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marks.resource.getSubjectsMarks();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getNewMarksCount', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marks.resource.getNewMarksCount();

        //
        // Assert
        //
        console.log(result);
        expect(result).toBeDefined();
    });

    test('getFinals', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marks.resource.getFinals();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getMeasures', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marks.resource.getMeasures();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getWhatIf', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });
        const predictMarks = [
            {
                id:null,
                markText:'3',
                weight:5,
                maxPoints:0,
                subjectId:'28'
            },
            {
                id:null,
                markText:'3-',
                weight:3,
                maxPoints:0,
                subjectId:'28'
            },
            {
                id:null,
                markText: '1',
                weight:3,
                maxPoints:0,
                subjectId:'28'
            }
        ];

        //
        // Act
        //
        await client.authenticate();
        const result = await client.marks.resource.getWhatIfMarks(predictMarks);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.payments.resource', () => {
    test('getClassfundOverviewPerMonth', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });
        const search = 'test';

        //
        // Act
        //
        await client.authenticate();
        const result = await client.payments.resource.getClassfundOverviewPerMonth(search);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getPaymentsInfo', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.payments.resource.getPaymentsInfo();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getClassfundSentSummary', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.payments.resource.getClassfundSentSummary();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});

describe('BakalariClient.subjects.resource', () => {
    test('getSubjects', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.subjects.resource.getSubjects();

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    test('getSubjectThemes', async () => {
        //
        // Arrange
        //
        // eslint-disable-next-line no-undef
        const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

        //
        // Act
        //
        await client.authenticate();
        const result = await client.subjects.resource.getSubjects();

        if (result.subjects.length > 0) {
            const subjectId = result.subjects[0].subjectId;
            const theme = await client.subjects.resource.getSubjectThemes(subjectId);

            //
            // Assert
            //
            console.log(JSON.stringify(theme, null, 2));
            expect(theme).toBeDefined();
        } else {
            console.warn('No data found');
        }

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });

    describe('BakalariClient.substitution.resource', () => {
        test('getWeekSubstitutions', async () => {
            //
            // Arrange
            //
            const date = DateTime.fromISO('2025-12-01');
            // eslint-disable-next-line no-undef
            const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

            //
            // Act
            //
            await client.authenticate();
            const result = await client.substitutions.resource.getWeekSubstitutions(date);

            //
            // Assert
            //
            console.log(JSON.stringify(result, null, 2));
            expect(result).toBeDefined();
        });
    });
});
