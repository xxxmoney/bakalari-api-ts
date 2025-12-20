
<p align="center">
  <a href="https://www.npmjs.com/package/bakalari-api-ts"><img src="https://img.shields.io/npm/v/bakalari-api-ts" alt="npm version"></a>
  <a href="https://github.com/xxxmoney/bakalari-api-ts/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Bakalari API TS is released under the MIT license"></a>
</p>


# Bakalari API TS

## About
Simple package for communicating with Bakalari school information system API

This package also includes some helpers and services for easier integration


## Code Structure

The project follows a structured pattern to organize the API client logic:

- Models (`src/models`):
  - Dtos returned by the Bakalari API endpints, also special models for uses in services
- Resources (`src/resources`): 
  - Specific endpoints areas of the Bakalari API (e.g., `/3/timetable` - `TimetableResource`, `/3/event/` - `EventResource`) 
- Services (`src/services`): 
  - They contain the resource and can also provide additional logic on top
- BakalariClient (`src/bakalari.client.ts`): 
  - Main entry point consumer of this pacakge will use - contains all the services and authentication logic


## Getting started
Install using npm:

```bash
npm install bakalari-api-ts
```

An example of getting timetable for an account:

```ts
import { BakalariClient } from 'bakalari-api-ts';
import { DateTime } from 'luxon';

// Create the client for specific school
const client = new BakalariClient('YOUR_SCHOOL_API_URL', 'YOUR_USERNAME', 'YOUR_PASSWORD');

// Initialize (authenticate)
await client.authenticate();

// You can now acccess various services in the client, for example timetable service:
const summary = await client.timetable.getMonthTimetableSummary(
    DateTime.now()
)

// You can also access the underlying resource of each service (to directly access the endpoints):
const rawTimetable = await client.timetable.resource.getWeekTimetable(
    DateTime.now()
)
```


## Supported Endpoints

| Status | Method | Endpoint |
| :---- | :---- | :---- |
| ⏳ | GET | /api |
| ⏳ | GET | /api/3 |
| ⏳ | GET | /api/3/absence/student |
| ⏳ | GET | /api/3/classbook |
| ⏳ | GET | /api/3/classbook/lessonTags |
| ⏳ | GET | /api/3/events |
| ⏳ | GET | /api/3/events/my |
| ⏳ | GET | /api/3/events/public |
| ⏳ | GET | /api/3/gdpr/commissioner |
| ⏳ | POST | /api/3/gdpr/commissioner/send-objection |
| ⏳ | POST | /api/3/gdpr/commissioner/send-report |
| ⏳ | GET | /api/3/gdpr/commissioners |
| ⏳ | GET | /api/3/gdpr/consent |
| ⏳ | GET | /api/3/gdpr/consents/person |
| ⏳ | GET | /api/3/gdpr/consents/person/child |
| ⏳ | GET | /api/3/homeworks |
| ⏳ | GET | /api/3/homeworks/count-actual |
| ⏳ | GET | /api/3/komens/attachment/{id} |
| ⏳ | POST | /api/3/komens/message |
| ⏳ | GET | /api/3/komens/message/{id} |
| ⏳ | POST | /api/3/komens/message/{id}/mark-as-read |
| ⏳ | GET | /api/3/komens/message-types |
| ⏳ | GET | /api/3/komens/message-types/edit |
| ⏳ | GET | /api/3/komens/message-types/reply |
| ⏳ | GET | /api/3/komens/messages/apology |
| ⏳ | GET | /api/3/komens/messages/noticeboard |
| ⏳ | GET | /api/3/komens/messages/noticeboard/unread |
| ⏳ | GET | /api/3/komens/messages/rating |
| ⏳ | GET | /api/3/komens/messages/received |
| ⏳ | GET | /api/3/komens/messages/received/{id} |
| ⏳ | GET | /api/3/komens/messages/sent/{id} |
| ⏳ | GET | /api/3/komens/messages/received/unread |
| ⏳ | GET | /api/3/komens/messages/sent |
| ⏳ | GET | /api/3/komens/rating-templates |
| ⏳ | GET | /api/3/lesson/... |
| ✅ | POST | /api/3/login |
| ⏳ | GET | /api/3/logintoken |
| ⏳ | GET | /api/3/marking/atoms |
| ⏳ | GET | /api/3/marking/marks/{id} |
| ⏳ | GET | /api/3/marks |
| ⏳ | GET | /api/3/marks/count-new |
| ⏳ | GET | /api/3/marks/final |
| ⏳ | GET | /api/3/marks/measures |
| ⏳ | GET | /api/3/marks/what-if |
| ⏳ | GET | /api/3/payments/classfund |
| ⏳ | GET | /api/3/payments/classfund/paymentsinfo |
| ⏳ | GET | /api/3/payments/classfund/summary |
| ⏳ | POST | /api/3/register-notification |
| ⏳ | GET | /api/3/subjects |
| ⏳ | GET | /api/3/subjects/themes/{id} |
| ⏳ | GET | /api/3/substitutions |
| ✅ | GET | /api/3/timetable/actual |
| ⏳ | GET | /api/3/timetable/permanent |
| ⏳ | GET | /Timetable/Public/ |
| ⏳ | DELETE | /api/3/unregister-user-notification |
| ⏳ | GET | /api/3/user |
| ⏳ | GET | /api/3/webmodule |


## API reference
TODO
