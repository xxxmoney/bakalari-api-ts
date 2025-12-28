
export interface WebModulesDto {
    webModules: WebModuleDto[];
    dashboard: WebModuleDto;
}

export interface WebModuleDto {
    iconId: string | null;
    subMenu: unknown;
    url: string;
    name: string | null;
}
