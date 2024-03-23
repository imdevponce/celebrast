'use client'
import { HomeContainer, SearchContainer, MainHomeContainer, SearchFormContainer, AboutCelebrastContainer, AboutCelebrastTitle, ClientSectionContainer, CelebrastDescription, ClientSteps, StepContainer } from './home.styles'
import Image from 'next/image'
import Input from 'app/components/Input'
import Button from 'app/components/Button'
import styles from './home.module.css'
import useViewportWidth from 'app/app/hooks/useViewportWidth'

export default function Home () {
  const width = useViewportWidth()
  console.log('width', width)
  return (
    <HomeContainer>
      <MainHomeContainer >
        {width <= 1335
          ? <Image
            src='/table-setting-mobile.png'
            alt="Mesa"
            layout="fill"
            objectFit="cover"
            objectPosition="center"/>
          : <Image
            src='/table-setting-desktop.png'
            alt="Mesa"
            layout="fill"
            objectFit="cover"
            objectPosition="center"/>}

        <SearchContainer>
          <h1>¡Bienvenido! Encuentra todos los proveedores para tu celebración especial en un solo lugar.</h1>
          <SearchFormContainer>
            <Input placeholder='Proveedores' margin='0 10px 0 0'/>
            <Input placeholder='Lugar' margin='0 10px 0 0' />
            <Button>Buscar</Button>
          </SearchFormContainer>
        </SearchContainer>
      </MainHomeContainer>
      <AboutCelebrastContainer>
        <AboutCelebrastTitle>
          Puedes organizar de todo con <strong>CELEBRAST</strong>!
        </AboutCelebrastTitle>
        <section className={styles.container}>
          <div className={styles.collage_wrap}>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/baby-shower.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='Baby shower'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/birthday.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='Cumpleaños'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/table-setting-2.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='Mesa'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='Boda'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/xv.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='Quince años'/>
              </div>
            </div>
          </div>
        </section>
        <ClientSectionContainer>
          <h2>¿Cómo funciona <strong>CELEBRAST</strong>?</h2>
          <CelebrastDescription>
              ¡Celebra con facilidad en <strong>CELEBRAST</strong>! Tu plataforma digital para la planificación de eventos. Encuentra proveedores de fotografía, salones de eventos, buffets y más, ¡todo en un solo lugar! Haz realidad tus sueños de celebración con nosotros.
          </CelebrastDescription>
          <ClientSteps>
            <StepContainer>
              <b>1</b>
              <Image
                src='/search.png'
                alt="Busqueda"
                width={150}
                height={150}
              />
              <h3>Encuentra tu proveedor</h3>
            </StepContainer>
            <StepContainer>
              <b>2</b>
              <Image
                src='/message.png'
                alt="Mensaje"
                width={150}
                height={150}
              />
              <h3>Contáctalo</h3>

            </StepContainer>
            <StepContainer>
              <b>3</b>
              <Image
                src='/details.png'
                alt="Detalles"
                width={150}
                height={150}
              />
              <h3>Acuerda los detalles</h3>
            </StepContainer>
            <StepContainer>
              <b>4</b>
              <Image
                src='/deal.png'
                alt="Acuerdo"
                width={150}
                height={150}
              />
              <h3>Realiza tu contratación</h3>
            </StepContainer>
          </ClientSteps>
        </ClientSectionContainer>
      </AboutCelebrastContainer>
    </HomeContainer>
  )
}
