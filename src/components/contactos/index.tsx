import React from 'react'
import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'

import Image from 'next/Image'
import Img from '../../assets/Map.png'
const Footer = () => (
  <S.ContainerContactos>
    <S.Container1>
      <h1>Em caso de dúvida entre em contacto</h1>
      <S.ContainerCampo>
        <span>Nome Completo</span>
        <input type="text" />
      </S.ContainerCampo>
      <S.ContainerCampo>
        <span>Sem e-mail</span>
        <input type="text" />
      </S.ContainerCampo>
      <S.ContainerCampo>
        <span>Mensagem</span>
        <input type="text" className="sms" />
      </S.ContainerCampo>
      <S.Button>Enviar Mensagem</S.Button>
    </S.Container1>
    <S.Container2>
      <div>
        <TiLocationOutline className="icon" />
        <span>Luanda, Rua xxx, yyy, zzz</span>
      </div>

      <div>
        <AiOutlineMail className="icon" />
        <span>baadaye@dominio.com</span>
      </div>

      <div>
        <BsTelephone className="icon" />
        <span>(+244) 920 000 000</span>
      </div>

      <Image src="/img/map.png" width="950" height="400" />
    </S.Container2>
  </S.ContainerContactos>
)

export default Footer
