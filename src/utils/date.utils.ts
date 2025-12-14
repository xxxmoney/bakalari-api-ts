import type {DateTime} from "luxon";

/**
 * Get start of weeks in the month
 * @param currentDay
 */
export function getStartOfWeeksInMonth(currentDay: DateTime): DateTime[] {
    const startOfWeeks: DateTime[] = [
        currentDay.startOf('month').startOf('week') // First start of the week in the month
    ];

    // While is still in the same month
    while(startOfWeeks[startOfWeeks.length - 1].month === currentDay.month) {
        startOfWeeks.push(
            startOfWeeks[startOfWeeks.length - 1].plus({weeks: 1})
        );
    }

    return startOfWeeks;
}