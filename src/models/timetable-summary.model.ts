import { Duration } from 'luxon';

export interface TimeTableSummary {

}


export interface Hour {
    description: string;
    beginTime: Duration;
    endTime: Duration;
}
