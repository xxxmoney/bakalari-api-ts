import { api, setAuthToken } from "./base.api.ts";
import type { LoginResponse } from "../models/login.model.ts";
import type { TimeTableResponse } from '../models/timetable.model.ts';
import * as constants from '../constants.ts';
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

export async function getTimetable(date: DateTime): Promise<TimeTableResponse> {
    const formattedDate = date.toFormat(constants.DATE_FORMAT);

    const response = await api.get(`/3/timetable/actual`, {
        params: {
            date: formattedDate
        }
    });

    return response.data as TimeTableResponse;
}

