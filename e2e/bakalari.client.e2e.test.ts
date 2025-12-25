jest.unmock('axios');

import { BakalariClient } from '../src';
import { DateTime } from 'luxon';
import dotenv from 'dotenv';

beforeAll(() => {
    // Copy .env.example to .env and fill in the values before running e2e tests
    dotenv.config();
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

        //
        // Act
        //
        await client.authenticate();
        const result = await client.homework.resource.getHomeworks();

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
