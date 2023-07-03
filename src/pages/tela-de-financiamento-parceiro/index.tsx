import {GetServerSideProps, NextPage} from "next"
import {isAuthenticated} from "src/functions/checkIsUserAuthenticated"


import TelaDeFinanciamentoParceiroView from "../../views/tela-de-financiamento-parceiro";

const TelaDeFinanciamentoParceiro: NextPage = () =>{
    return (
        <TelaDeFinanciamentoParceiroView />
    )
}

export const getServerSideProps: GetServerSideProps<{}> = async({
    req, 
    res
}) => {
    if (!isAuthenticated(req)) {
        res.writeHead(303, { Location: '/login' });
        res.end();
    }
  if (isAuthenticated(req)?.tipo_usuario !== 'estudante') {
        res.writeHead(303, { Location: '/tela-de-financiamento-parceiro' });
        res.end();
    }
    return {props: {}}
}

export default TelaDeFinanciamentoParceiro;