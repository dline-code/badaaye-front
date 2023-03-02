
interface IStudent {
    grauId: string;
    cursoId: string;
    universidadeId: string;
    municipioId: string;
    bairro: string;
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

interface IProvinces {
    id: string,
    designacao: string,
    createdAt: string,
    updatedAt: string
}

interface IDegree {
    id: string,
    designacao: string,
    createdAt: string,
    updatedAt: string
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
interface IMunicipality{
    id:string,
    designacao:string,
    provinciaId: string,
    createdAt:string,
    updatedAt:string
}

export type { IStudent, IErrorInterface, IProvinces, IDegree, ICourse,IUniversity ,IMunicipality}