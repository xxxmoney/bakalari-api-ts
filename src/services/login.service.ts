import { LoginResource } from '../resources/login.resource';
import type { Credentials } from '../models/credentials.model';
import { Api } from '../api/base.api';

export class LoginService {
    private readonly credentials: Credentials;

    public readonly resource: LoginResource;

    constructor(api: Api, credentials: Credentials) {
        this.credentials = credentials;
        this.resource = new LoginResource(api);
    }

    public async authenticate() {
        return this.resource.authenticate(this.credentials.username, this.credentials.password);
    }

    private async reauthenticate() {
        // TODO: implement refresh token flow
        throw new Error('Not implemented');
    }

}