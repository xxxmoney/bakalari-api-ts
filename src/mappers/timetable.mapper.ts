import type { TimeTableSummary } from '../models/timetable-summary.model';
import type { ClassItemDto, TimeTableResponseDto } from '../models/timetable-response.model';
import { DateTime } from 'luxon';
import { toMap } from '../utils/map.utils';

export function mapTimeTableResponseToSummary(timetable: TimeTableResponseDto): TimeTableSummary {
    const subjectById = toMap(
        timetable.subjects,
        (item) => item.id
    );
    const groupById = toMap(
        timetable.groups,
        (item) => item.id
    );
    const classById = toMap(
        timetable.classes,
        (item: ClassItemDto) => item.id
    );
    const hourById = toMap(
        timetable.hours,
        (item) => item.id
    );

    return {
        days: timetable.days.map(day => ({
            date: DateTime.fromISO(day.date),
            dayType: day.dayType,
            hours: day.atoms.map(atom => ({
                changeType: atom.change?.changeType || null,
                description: atom.theme,
                subject: subjectById.get(atom.subjectId)?.name || '',
                classes: atom.groupIds.map(groupId =>
                    classById.get(
                        groupById.get(groupId)!.classId
                    )!.abbrev
                ),
                beginTime: hourById.get(atom.hourId)!.beginTime,
                endTime: hourById.get(atom.hourId)!.endTime
            }))
        }))
    };
}