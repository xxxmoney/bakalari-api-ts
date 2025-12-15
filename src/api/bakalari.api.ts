import {objectToCamel} from "ts-case-convert";
import { api, setAuthToken } from "./base.api";
import type { LoginResponse } from "../models/login.model";
import type { TimeTableResponse } from '../models/timetable-response.model';
import * as constants from '../constants';
import { DateTime } from 'luxon';

export async function login(username: string, password: string): Promise<LoginResponse> {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', constants.GRANT_TYPE);
    params.append('client_id', constants.CLIENT_ID);

    const response = await api.post('/login', params);
    const data = response.data as LoginResponse;

    setAuthToken(data.access_token);

    return data;
}

export async function getWeekTimetable(date: DateTime): Promise<TimeTableResponse> {
    const formattedDate = date.toFormat(constants.DATE_FORMAT);

    const response = await api.get(`/3/timetable/actual`, {
        params: {
            date: formattedDate
        }
    });

    return objectToCamel<TimeTableResponse>(response.data);
}

