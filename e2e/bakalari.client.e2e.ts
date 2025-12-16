import { BakalariClient } from '../src';
import { DateTime } from 'luxon';

describe('BakalariClient', () => {
    test('timetable.getMonthTimetableSummary', async () => {
        //
        // Arrange
        //
        const date = DateTime.fromISO('2025-12-01');
        const client = new BakalariClient('', { username: '', password: '' });

        //
        // Act
        //
        await client.initialize();
        const result = await client.timetable.getMonthTimetableSummary(date);

        //
        // Assert
        //
        console.log(JSON.stringify(result, null, 2));
        expect(result).toBeDefined();
    });
});
