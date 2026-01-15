
export interface ClassfundMonthlyDto {
    monthlyData: ClassfundMonthDto[];
}

export interface ClassfundPaymentsInfoDto {
    instructions: string;
    bankAccount: string;
    variableSymbol: number;
    specificSymbol: number;
    amount: number;
    message: string;
}

export interface ClassfundSummaryDto {
    studentNameWithClass: number;
    balance: number;
    spent: number;
}

export interface ClassfundMonthDto {
    date: string;
    monthlyBalance: number;
    items: ClassfundTransactionDto[];
}

export interface ClassfundTransactionDto {
    description: string;
    date: string;
    amount: number;
}

export type Sorting = 'asc' | 'desc';
