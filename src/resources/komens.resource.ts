import { objectToCamel } from 'ts-case-convert';
import type { Api } from '../api/base.api';
import type {
    KomensMessageDetailResponseDto,
    KomensMessagesDto,
    KomensMessageTypesDto,
    KomensSendMessageDto
} from '../models/komens.model';

export class KomensResource {
    private readonly api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async getAttachment(id: string): Promise<ArrayBuffer> {
        const response = await this.api.client.get(`/3/komens/attachment/${id}`, {
            responseType: 'arraybuffer'
        });

        return response.data;
    }

    async sendMessage(data: KomensSendMessageDto): Promise<void> {
        await this.api.client.post('/3/komens/message', data);
    }

    async getMessage(id: string): Promise<KomensMessagesDto> {
        const response = await this.api.client.get(`/3/komens/message/${id}`);

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    async markMessageAsRead(id: string): Promise<void> {
        await this.api.client.put(`/3/komens/message/${id}/mark-as-read`, new URLSearchParams());
    }

    async getMessageTypes(): Promise<KomensMessageTypesDto> {
        const response = await this.api.client.get('/3/komens/message-types');

        return objectToCamel<KomensMessageTypesDto>(response.data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async editMessageType(edit: any): Promise<any> { // TODO: Define return type
        const response = await this.api.client.post('/3/komens/message-types/edit', edit);

        return objectToCamel<any>(response.data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async replyMessageType(reply: any): Promise<any> { // TODO: Define return type
        const response = await this.api.client.post('/3/komens/message-types/reply', reply);

        return objectToCamel<any>(response.data);
    }

    async getMessageForType(id: string, type: 'received' | 'sent'): Promise<KomensMessageDetailResponseDto> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/${id}`);

        return objectToCamel<KomensMessageDetailResponseDto>(response.data);
    }

    async getMessages(type: 'apology' | 'noticeboard' | 'rating' | 'received' | 'sent'): Promise<KomensMessagesDto> {
        const response = await this.api.client.post(`/3/komens/messages/${type}`, new URLSearchParams());

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    async getUnreadMessagesCount(type: 'noticeboard' | 'received'): Promise<number> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/unread`);

        return response.data;
    }
}
