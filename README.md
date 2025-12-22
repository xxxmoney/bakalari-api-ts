
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
(⏳ -> 🔨 -> ️⚠️ | ✅)

| Status | Method | Endpoint |
| :---- | :---- | :---- |
| ⏳ | GET | /api |
| ⏳ | GET | /api/3 |
| ⚠️ | GET | /api/3/absence/student |
| ✅ | GET | /api/3/classbook |
| ✅ | GET | /api/3/classbook/lessonTags |
| ✅ | GET | /api/3/events |
| ✅ | GET | /api/3/events/my |
| ✅ | GET | /api/3/events/public |
| 🔨 | GET | /api/3/gdpr/commissioner |
| 🔨 | POST | /api/3/gdpr/commissioner/send-objection |
| 🔨 | POST | /api/3/gdpr/commissioner/send-report |
| 🔨 | GET | /api/3/gdpr/commissioners |
| 🔨 | GET | /api/3/gdpr/consent |
| 🔨 | GET | /api/3/gdpr/consents/person |
| 🔨 | GET | /api/3/gdpr/consents/person/child |
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


## How to add new Bakalari API endpoints

Explains how to add support for new endpoints to the `bakalari-api-ts` client

### File Structure

To add a new set of endpoints, you'll need to create or modify the following files:

- `src/models/<your-model>.model.ts`: Define models for the data returned by the new endpoints
- `src/resources/<your-resource>.resource.ts`: Create a new resource file for the new endpoints
- `src/services/<your-service>.service.ts`: Create a new service file that uses the new resource
- `src/bakalari.client.ts`: Update the main client to include the new service

### Step-by-step guide

Let's walk through an example of adding the `api/3/gdpr` endpoints.

#### Step 1: Create the Resource

First, create a new resource file at `src/resources/gdpr.resource.ts`
This file will contain a class with methods that make the actual API calls (basically a repository)
(Note - in the example, the endpoints start with the /3/ prefix - this is because the base API address should already contain the /api/ part)

```typescript
// src/resources/gdpr.resource.ts
import type { Api } from '../api/base.api';
import { objectToCamel } from 'ts-case-convert';

export class GdprResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    // GET /3/gdpr/commissioner
    async getCommissioner(): Promise<any> { // TODO: Define return type
        const response = await this.api.client.get('/3/gdpr/commissioner');
        return objectToCamel(response.data);
    }

    // POST /3/gdpr/commissioner/send-objection
    async sendObjection(data: any): Promise<any> { // TODO: Define body and return type
        const response = await this.api.client.post('/3/gdpr/commissioner/send-objection', data);
        return objectToCamel(response.data);
    }
    
    // And so on for the other GDPR endpoints...
}
```

#### Step 2: Create the Service

Next, create a new service file at `src/services/gdpr.service.ts`
The service can provide additional logic if needed
It exposes the resource, so the consumer can access the resource through it

```typescript
// src/services/gdpr.service.ts
import { GdprResource } from '../resources/gdpr.resource';
import { Api } from '../api/base.api';

export class GdprService {
    public readonly resource: GdprResource;

    constructor(api: Api) {
        this.resource = new GdprResource(api);
    }

    async getCommissioner(): Promise<any> {
        return this.resource.getCommissioner();
    }

    async sendObjection(data: any): Promise<any> {
        return this.resource.sendObjection(data);
    }

    // And so on...
}
```

#### Step 3: Update the BakalariClient

Finally, add the new `GdprService` to the `BakalariClient` in `src/bakalari.client.ts`

```typescript
// src/bakalari.client.ts
import { TimetableService } from './services/timetable.service';
import { Api } from './api/base.api';
import type { Credentials } from './models/credentials.model';
import { LoginService } from './services/login.service';
import { AbsenceService } from './services/absence.service';
import { ClassbookService } from './services/classbook.service';
import { EventService } from './services/event.service';
import { GdprService } from './services/gdpr.service'; // 1. Import the new service

export class BakalariClient {
    private readonly login: LoginService;

    public readonly timetable: TimetableService;
    public readonly absence: AbsenceService;
    public readonly classbook: ClassbookService;
    public readonly event: EventService;
    public readonly gdpr: GdprService; // 2. Add the service as a public property

    constructor(baseUrl: string, credentials: Credentials) {
        const api = new Api(baseUrl);

        this.login = new LoginService(api, credentials);

        this.timetable = new TimetableService(api);
        this.absence = new AbsenceService(api);
        this.classbook = new ClassbookService(api);
        this.event = new EventService(api);
        this.gdpr = new GdprService(api); // 3. Instantiate the new service
    }

    async authenticate() {
        await this.login.authenticate();
    }
}
```

### Models

It's a good practice to create models for the data returned by the API
For example, if the `/3/gdpr/commissioner` endpoint returns a commissioner object, you could create a `commissioner.model.ts` file in `src/models`:

```typescript
// src/models/commissioner.model.ts
export interface Commissioner {
    id: string;
    name: string;
    // ... other properties
}
```

You can then use this model in your resource and service files to provide strong typing

```typescript
// src/resources/gdpr.resource.ts
import { Commissioner } from '../models/commissioner.model';
import { objectToCamel } from 'ts-case-convert';

export class GdprResource {
// ...
    async getCommissioner(): Promise<Commissioner> {
        const response = await this.api.client.get<Commissioner>('/3/gdpr/commissioner');
        return objectToCamel<Commissioner>(response.data);
    }

// ...
}
```

### Tests

Also, to also test the functionality of the new endpoints, you can create test files in the `e2e` (end to end tests) or `tests` (unit tests) folder
`e2e/bakalari.client.e2e.test.ts`: Test for the new resource - define new describe
for example, creating e2e tests for the GDPR endpoints:

```typescript

// ...

describe('BakalariClient.gdpr.resource', () => {
  test('getClassbooks', async () => {
    //
    // Arrange
    //
    // eslint-disable-next-line no-undef
    const client = new BakalariClient(process.env.APP_BAKALARI_URL!, { username: process.env.APP_USERNAME!, password: process.env.APP_PASSWORD! });

    //
    // Act
    //
    await client.authenticate();
    const result = await client.classbook.resource.getCommissioner();

    //
    // Assert
    //
    console.log(JSON.stringify(result, null, 2));
    expect(result).toBeDefined();
  });
});

// ...

```
