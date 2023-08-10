import React, { useEffect } from 'react'
import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Input from '../input'

const Contactos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.ContainerContacts>
      <S.ContainerObject>
        <S.FirstContainer >
          <h1>Em caso de dúvida entre em contacto</h1>
          <S.ContainerField>
            <span>Nome Completo</span>
            <Input type='text' />
          </S.ContainerField>
          <S.ContainerField>
            <span>Sem e-mail</span>
            <Input type="email" />
          </S.ContainerField>
          <S.ContainerField>
            <span>Mensagem</span>
            <textarea></textarea>
          </S.ContainerField>
          <S.Button>Enviar Mensagem</S.Button>
        </S.FirstContainer>
        <S.SecondContainer>
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
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </S.SecondContainer>
      </S.ContainerObject>
    </S.ContainerContacts>
  )
}

export default Contactos
