import React from 'react'
import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'
import Map from '../map-dline/index'

const Contactos = () => (
  <S.ContainerContactos>
    <S.ContainerObject>
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
          <span>Luanda</span>
        </div>

        <div>
          <AiOutlineMail className="icon" />
          <span>geral@baadaye.ao</span>
        </div>

        <div>
          <BsTelephone className="icon" />
          <span>(+244) 953 068 428</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126152.9522212631!2d13.21406370190949!3d-8.853525839594026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1664503090015!5m2!1spt-PT!2sao"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </S.Container2>
    </S.ContainerObject>
  </S.ContainerContactos>
)

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
