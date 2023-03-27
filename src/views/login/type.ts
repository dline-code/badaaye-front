export interface IUser {
    email: string;
    senha: string;
}

interface IResponse {
    status: number;
    statusText: string;
    data: {
        error: string;
        status: number;
    }
}

export interface IError {
    message: string;
    name: string;
    stack: string;
    response: IResponse;
}