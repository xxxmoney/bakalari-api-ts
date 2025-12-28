
export interface UserDto {
    userUid: string;
    campaignCategoryCode: string;
    class: UserClassDto;
    fullName: string;
    schoolOrganizationName: string;
    schoolType: string | null;
    userType: string;
    userTypeText: string;
    studyYear: number;
    enabledModules: EnabledModuleDto[];
    settingModules: SettingModulesDto;
}

export interface UserClassDto {
    id: string;
    abbrev: string;
    name: string;
}

export interface EnabledModuleDto {
    module: string;
    rights: string[];
}

export interface SettingModulesDto {
    common: CommonModuleSettingsDto;
}

export interface CommonModuleSettingsDto {
    $type: string;
    actualSemester: SemesterDto;
}

export interface SemesterDto {
    semesterId: string;
    from: string;
    to: string;
}
