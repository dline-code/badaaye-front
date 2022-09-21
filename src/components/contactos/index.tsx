import React, { useEffect } from 'react'
import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'
import Map from '../map-baadaye/index'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contactos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.ContainerContactos>
      <S.ContainerObject>
        <S.Container1 data-aos="fade-right">
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
        <S.Container2 data-aos="fade-left">
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
          <Map />
        </S.Container2>
      </S.ContainerObject>
    </S.ContainerContactos>
  )
}

export default Contactos
/*import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'

import Image from 'next/image'
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

export default Footer*/
