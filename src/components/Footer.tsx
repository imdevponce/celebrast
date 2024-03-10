'use client'
import { FooterContainer, InfoContainer, FollowUsContainer, SocialMediaContainer, InfoSectionsContainer } from './footer.styles'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'
import TwitterX from './icons/TwitterX'
import TikTokIcon from './icons/TikTokIcon'

export default function Footer () {
  return (
    <FooterContainer>
      <InfoContainer>
        <strong>
          Celebrast
        </strong>
        <InfoSectionsContainer>
          <p>Contacto</p>
          <p>Sobre nosotros</p>
          <p>Politica de Cookies</p>
        </InfoSectionsContainer>
      </InfoContainer>
      <FollowUsContainer>
        <strong>
          Síguenos en
        </strong>
        <SocialMediaContainer>
          <FacebookIcon height={30} width={30}/>
          <InstagramIcon height={30} width={30}/>
          <TwitterX height={30} width={30}/>
          <TikTokIcon height={30} width={30}/>
        </SocialMediaContainer>
      </FollowUsContainer>
    </FooterContainer>
  )
}
