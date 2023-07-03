export interface ApiResponse {
  response: {
    data: {
      message: string
    }
  }
}

export type PartnerDataProps = {
  parceiro: {
    id: string,
    nome: string,
    email: string,
    areaId: string,
    descricao: string,
    tipoParceiroId: string,
    tipoParceiro: {
      designacao: string
    },
  },
  areasInteresse: [
    {
      id: string,
      designacao: string,
      areaId: string,
    }
  ],
  telefone: {
    id: string,
    designacao: string,
  }
}

export type UpdatepPartner = {
  nome: string
  descricao: string
  tipoParceiro: string
  telefone: string
  areasInteresse: [
    {
      id: string,
      designacao: string,
      areaId: string,
    }
  ]
  areaId: string
}
