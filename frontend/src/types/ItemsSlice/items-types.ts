export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface IAsyncProps {
    search: string;
    category: number;
}