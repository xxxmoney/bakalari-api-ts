import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';
import type {
    KomensMessageDetailResponseDto,
    KomensMessagesDto,
    KomensMessageTypesDto,
    KomensSendMessageDto, MessageSpecificType, MessageType, MessageUnreadType, RatingTemplatesDto
} from '../models/komens.model';

export class KomensResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getAttachment(id: string): Promise<ArrayBuffer> {
        const response = await this.api.client.get(`/3/komens/attachment/${id}`, {
            responseType: 'arraybuffer'
        });

        return response.data;
    }

    public async sendMessage(data: KomensSendMessageDto): Promise<void> {
        await this.api.client.post('/3/komens/message', data);
    }

    public async getMessage(id: string): Promise<KomensMessagesDto> {
        const response = await this.api.client.get(`/3/komens/message/${id}`);

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    public async markMessageAsRead(id: string): Promise<void> {
        await this.api.client.put(`/3/komens/message/${id}/mark-as-read`, new URLSearchParams());
    }

    public async getMessageTypes(): Promise<KomensMessageTypesDto> {
        const response = await this.api.client.get('/3/komens/message-types');

        return objectToCamel<KomensMessageTypesDto>(response.data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async editMessageType(edit: any): Promise<any> { // TODO: Define return type
        const response = await this.api.client.post('/3/komens/message-types/edit', edit);

        return objectToCamel(response.data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async replyMessageType(reply: any): Promise<any> { // TODO: Define return type
        const response = await this.api.client.post('/3/komens/message-types/reply', reply);

        return objectToCamel(response.data);
    }

    public async getMessageForType(id: string, type: MessageSpecificType): Promise<KomensMessageDetailResponseDto> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/${id}`);

        return objectToCamel<KomensMessageDetailResponseDto>(response.data);
    }

    public async getMessages(type: MessageType): Promise<KomensMessagesDto> {
        const response = await this.api.client.post(`/3/komens/messages/${type}`, new URLSearchParams());

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    public async getUnreadMessagesCount(type: MessageUnreadType): Promise<number> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/unread`);

        return response.data;
    }

    public async getRatingTemplates(): Promise<RatingTemplatesDto> {
        const response = await this.api.client.get('/3/komens/rating-templates');

        return objectToCamel<RatingTemplatesDto>(response.data);
    }
}
