
# Bakalari API TS

## About
Simple package for communicating with Bakalari school information system API

This package also includes some helpers and services for easier integration

## Getting started
Install using npm:

```bash
npm install bakalari-api-ts
```

An example of getting timetable for an account:

```ts
import {getMonthTimetableSummary} from 'bakalari-api-ts';
import {DateTime} from "luxon";

const summary = await getMonthTimetableSummary(
    'YOUR_USERNAME', // Your Bakalari username
    'YOUR_PASSWORD', // Your Bakalari password
    DateTime.now() // Any day in the month you want to get (Luxon date)
)
```

## API reference
TODO
