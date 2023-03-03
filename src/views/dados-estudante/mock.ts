export const userData = {
  email: 'Osvaldodacosta@gmail.com',
  nome: 'Osvaldo da Costa',
  telefone: '923123456',
  senha: 'fddsdsfdfsd',
  grade: 'Ensino Superior',
  course: 'Engenharia Informática',
  school: 'Universidade Agostinho Neto',
  prov: 'Luanda',
  muni: 'Cacuaco',
  street: 'Paraiso'
}

export function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay))
}
