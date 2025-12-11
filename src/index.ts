// TODO: use axios

// Docs - https://github.com/bakalari-api/bakalari-api-v3

const API_URL = 'https://is.sssvt.cz/';

// Fetch login from Bakalari API
const params = new URLSearchParams();
params.append('username', 'hana');
params.append('password', '');
params.append('grant_type', 'password');
params.append('client_id', 'ANDR');

const response = await fetch(`${API_URL}/IS/api/login`, {
    method: 'POST',
    body: params
});

const data = await response.json()
console.log(data)
