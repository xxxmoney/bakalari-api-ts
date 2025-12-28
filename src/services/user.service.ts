import { userResource } from '../resources/user.resource';
import type { Api } from '../api/base.api';

export class UserService {
    public readonly resource: userResource;

    constructor(api: Api) {
        this.resource = new userResource(api);
    }

}
