import axios from 'axios';
import { DateTime } from 'luxon';
import { BakalariClient } from '../../src';

describe('BakalariClient', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    beforeEach(() => {
        // Clear call history before each test
        mockedAxios.get.mockClear();
    });

    test('timetable.getMonthTimetableSummary', async () => {
        //
        // Arrange
        //
        const date = DateTime.fromISO('2025-12-01');
        // TODO: load and compare data from examples folder
        const mockData = { days: [] };
        const expected = { days: [] };

        mockedAxios.get.mockResolvedValue({
            data: mockData,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        }); // Set response to all get requests

        //
        // Act
        //
        const client = new BakalariClient('https://hustlers-university.ca/IS', { username: 'user', password: 'pass' });

        await client.authenticate();
        const result = await client.timetable.getCurrentMonthTimetableSummary(date);

        //
        // Assert
        //
        expect(mockedAxios.post).toHaveBeenCalledTimes(1); // 1 time for login
        expect(mockedAxios.get).toHaveBeenCalledTimes(5); // 5 times for getting weeks
        expect(result).toEqual(expected);
    });
});
