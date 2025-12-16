// TODO: fix test

import axios from 'axios';
import { getMonthTimetableSummary } from '../../src';
import { DateTime } from 'luxon';

// Use mock for axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TimetableService', () => {
    beforeEach(() => {
        // Clear call history before each test
        mockedAxios.get.mockClear();
    });

    test('getMonthTimetableSummary', async () => {
        // Arrange
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

        // Act
        const result = await getMonthTimetableSummary('', '', date);

        // Assert
        expect(mockedAxios.post).toHaveBeenCalledTimes(1); // 1 time for login
        expect(mockedAxios.get).toHaveBeenCalledTimes(5); // 5 times for getting weeks
        expect(result).toEqual(expected);
    });
});
