export interface IPartner{
    nome:string;
    email:string;
    parceiro:string;
    telefone:string;
    senha:string;
    confirmeSenha:string;
}

export interface IResponse {
    status: number;
    statusText: string;
    data: {
        error: string;
        status: number;
    }
}

export interface IErrorInterface {
    message: string;
    name: string;
    stack: string;
    response: IResponse
}