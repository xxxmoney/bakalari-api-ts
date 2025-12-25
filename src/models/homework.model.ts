
export interface HomeworksDto {
    homeworks: HomeworkDto[];
}

export interface HomeworkCountDto {
    count: number;
}

export interface HomeworkDto {
    id: string;
    dateStart: string;
    dateEnd: string;
    content: string;
    notice: string;
    done: boolean;
    closed: boolean;
    electronic: boolean;
    hour: number;
    class: HomeworkEntityDto | null;
    group: HomeworkEntityDto | null;
    subject: HomeworkEntityDto | null;
    teacher: HomeworkEntityDto | null;
    attachments: AttachmentDto[];
    finished: boolean;
}

export interface AttachmentDto {
    id: string;
    name: string;
    type: string;
    size: number;
}

export interface HomeworkEntityDto {
    id: string;
    abbrev: string;
    name: string;
}