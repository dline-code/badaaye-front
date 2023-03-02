export interface IUser {
    email: string;
    password: string;
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
    massage: string;
    name: string;
    stack: string;
    response: IResponse;
}