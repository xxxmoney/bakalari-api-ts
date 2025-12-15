import type { DateTime } from 'luxon';

/**
 * Get start of weeks in the month
 * @param currentDay
 */
export function getStartOfWeeksInMonth(currentDay: DateTime): DateTime[] {
    const startOfWeeks: DateTime[] = [];

    // While is still in the same month
    let current = currentDay.startOf('month').startOf('week');
    while (current.month === currentDay.month) {
        startOfWeeks.push(current);

        current = current.plus({ weeks: 1 });
    }

    return startOfWeeks;
}