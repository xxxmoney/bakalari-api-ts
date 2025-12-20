jest.unmock('axios');

import { BakalariClient } from '../src';
import { DateTime } from 'luxon';
import dotenv from 'dotenv';

beforeAll(() => {
    // Copy .env.example to .env and fill in the values before running e2e tests
    dotenv.config();
});

describe('BakalariClient services', () => {
    test('timetable.getMonthTimetableSummary', async () => {
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

describe('BakalariClient resources', () => {
    test('timetable.resource.getWeekTimetable', async () => {
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
