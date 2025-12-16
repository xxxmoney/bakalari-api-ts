import { LoginResource } from '../resources/login.resource';
import type { Credentials } from '../models/credentials.model';
import { Api } from '../api/base.api';

export class LoginService {
    private readonly credentials: Credentials;
    private readonly loginResource: LoginResource;

    constructor(api: Api, credentials: Credentials) {
        this.credentials = credentials;
        this.loginResource = new LoginResource(api);
    }

    async authenticate() {
        return this.loginResource.authenticate(this.credentials.username, this.credentials.password);
    }

    async reauthenticate() {
        // TODO: implement refresh token flow
        throw new Error('Not implemented');
    }

}