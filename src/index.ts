import * as dotenv from 'dotenv';

// Initialize config
dotenv.config({ override: true });

// TODO: use axios

// Docs - https://github.com/bakalari-api/bakalari-api-v3

const API_URL = 'https://is.sssvt.cz/';

console.log(process.env)

// Fetch login from Bakalari API
const params = new URLSearchParams();
params.append('username', process.env.USERNAME || '');
params.append('password', process.env.PASSWORD || '');
params.append('grant_type', 'password');
params.append('client_id', 'ANDR');

const response = await fetch(`${API_URL}/IS/api/login`, {
    method: 'POST',
    body: params
});

const data = await response.json()
console.log(data)
