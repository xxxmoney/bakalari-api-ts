
<p align="center">
  <a href="https://www.npmjs.com/package/bakalari-api-ts"><img src="https://img.shields.io/npm/v/bakalari-api-ts" alt="npm version"></a>
  <a href="https://github.com/xxxmoney/bakalari-api-ts/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Bakalari API TS is released under the MIT license"></a>
</p>

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
import { getMonthTimetableSummary } from 'bakalari-api-ts';
import { DateTime } from 'luxon';

const summary = await getMonthTimetableSummary(
    'YOUR_USERNAME', // Your Bakalari username
    'YOUR_PASSWORD', // Your Bakalari password
    DateTime.now() // Any day in the month you want to get (Luxon date)
)
```

## API reference
TODO
