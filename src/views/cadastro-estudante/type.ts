
interface IStudent {
    id?:string;
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    senha: string;
    confirmarSenha: string
}

interface IResponse {
    status: number;
    statusText: string;
    data: {
        error: string;
        status: number;
    }
}

interface IErrorInterface {
    message: string;
    name: string;
    stack: string;
    response: IResponse
}
export type { IStudent, IErrorInterface }