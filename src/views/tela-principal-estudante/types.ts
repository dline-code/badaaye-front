export interface IStudent {
    id?:string;
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    cuurso:ICourse;
    grau:IDegree;
    senha: string;
}

interface ICourse {
    id: string,
    nome: string,
    descricao:string,
    areaId:string,
    createdAt: string,
    updatedAt: string
}

interface IUniversity{
    id: string,
    nome:string,
    descricao:string,
    sigla:string,
    logotipoId:string,
    createdAt: string,
    updatedAt: string
}

interface IDegree {
    id: string,
    designacao: string,
    createdAt: string,
    updatedAt: string
}


export interface PageProps {
    hideFooter?: boolean;
    isLogged?: boolean;
}