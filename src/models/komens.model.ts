
export interface KomensMessagesDto {
    messages: KomensMessageDto[];
}

export interface KomensMessageDto {
    $type: string;
    id: string;
    title: string;
    text: string;
    sentDate: string;
    sender: KomensSenderDto;
    attachments: KomensAttachmentDto[];
    read: boolean;
    lifeTime: string | null;
    dateFrom: string | null;
    dateTo: string | null;
    confirmed: boolean;
    canConfirm: boolean;
    type: string;
    canAnswer: boolean;
    hidden: boolean;
    canHide: boolean;
    relevantName: string;
    relevantPersonType: string;
}

export interface KomensMessageDetailResponseDto {
    message: KomensMessageDetailDto;
}

export interface KomensMessageDetailDto extends KomensMessageDto {
    recipients: KomensRecipientDto[];
    recipientsProcessed: KomensRecipientProcessedDto[];
    persons: KomensPersonDto[];
    canDelete: boolean;
}

export interface KomensMessageTypesDto {
    messageTypes: KomensMessageTypeDto[];
    recipients: KomensRecipientTypeItemDto[];
}

export interface KomensMessageTypeDto {
    abbreviation: string;
    name: string;
    showEmailNotification: boolean;
    hasTitle: boolean;
    recipientsTypes: KomensRecipientTypeDto[];
    superType: string;
    showConfirmation: boolean;
}

export interface KomensSendMessageDto {
    messageType: string;
    title: string;
    text: string;
    recipientType: string;
    recipients: string[];
    lifetime: string | null;
    dateFrom: string | null;
    dateTo: string | null;
    previousMessageId: string | null;
    copyForClassTeacher: boolean;
    copyForParent: boolean;
    emailNotification: boolean;
    sendAsDirector: boolean;
    requireConfirmation: boolean;
    typeOfRatingId: string | null;
    scale: unknown | null;
    attachments: unknown[]; // TODO: Define attachment upload structure if known
    draftDate: string | null;
}

export interface KomensSenderDto {
    id: string;
    type: string;
    name: string;
}

export interface KomensAttachmentDto {
    id: string;
    name: string;
    size: number;
    type: string;
}

export interface KomensPersonDto {
    id: string;
    userType: string;
    personId: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    degree: string | null;
    degreeBehind: string | null;
    classAbbreviation: string | null;
}

export interface KomensRecipientDto {
    recipientId: string;
    userType: string;
}

export interface KomensRecipientProcessedDto {
    recipientId: string;
    userType: string;
    actionDate: string | null;
    parentPersons: unknown[];
}

export interface KomensRecipientTypeItemDto {
    code: string;
    isDefault: boolean;
    abbreviation: string;
    displayName: string;
    name: string;
}

export interface KomensRecipientTypeDto {
    code: string;
    name: string;
    showCopyForClassTeacher: boolean;
    showCopyForDirector: boolean;
    showCopyForParent: boolean;
    typeOfSelection: string;
    recipients: KomensRecipientTypeItemDto[];
}
