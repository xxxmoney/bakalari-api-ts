import type {TimeTableSummary} from "../models/timetable-summary.model.js";
import type {ClassItem, TimeTableResponse} from "../models/timetable-response.model.js";
import {DateTime} from "luxon";
import {toMap} from "../utils/map.utils.js";

export function mapTimeTableResponseToSummary(response: TimeTableResponse): TimeTableSummary {
    const subjectById = toMap(
        response.subjects,
        (item) => item.id
    );
    const groupById = toMap(
        response.groups,
        (item) => item.id
    );
    const classById = toMap(
        response.classes,
        (item: ClassItem) => item.id
    );
    const hourById = toMap(
        response.hours,
        (item) => item.id
    );

    return {
        days: response.days.map(day => ({
            date: DateTime.fromISO(day.date),
            hours: day.atoms.map(atom => ({
                description: atom.theme,
                subject: subjectById.get(atom.subjectId)!.name,
                classes: atom.groupIds.map(groupId =>
                    classById.get(
                        groupById.get(groupId)!.classId
                    )!.abbrev
                ),
                beginTime: hourById.get(atom.hourId)!.beginTime,
                endTime: hourById.get(atom.hourId)!.endTime
            }))
        }))
    }
}