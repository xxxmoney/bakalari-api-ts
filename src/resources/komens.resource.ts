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
        await this.api.client.post('/3/komens/message', data, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
    }

    async getMessageById(id: string): Promise<KomensMessagesDto> {
        const response = await this.api.client.get(`/3/komens/message/${id}`);

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    async markMessageAsRead(id: string): Promise<void> {
        await this.api.client.put(`/3/komens/message/${id}/mark-as-read`, {}, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    }

    async getMessageTypes(): Promise<KomensMessageTypesDto> {
        const response = await this.api.client.get('/3/komens/message-types');

        return objectToCamel<KomensMessageTypesDto>(response.data);
    }

    async getMessageByIdAndType(id: string, type: 'received' | 'sent'): Promise<KomensMessageDetailResponseDto> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/${id}`, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        return objectToCamel<KomensMessageDetailResponseDto>(response.data);
    }

    async getMessages(type: 'noticeboard' | 'received' | 'sent'): Promise<KomensMessagesDto> {
        const response = await this.api.client.post(`/3/komens/messages/${type}`, {}, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        return objectToCamel<KomensMessagesDto>(response.data);
    }

    async getUnreadMessagesCount(type: 'noticeboard' | 'received'): Promise<number> {
        const response = await this.api.client.get(`/3/komens/messages/${type}/unread`, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        return response.data;
    }
}
