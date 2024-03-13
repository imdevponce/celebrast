'use client'
import { HomeContainer, SearchContainer, MainHomeContainer, SearchFormContainer, AboutCelebrastContainer, AboutCelebrastTitle } from './home.styles'
import Image from 'next/image'
import Input from 'app/components/Input'
import Button from 'app/components/Button'
import styles from './home.module.css'
export default function Home () {
  return (
    <HomeContainer>
      <MainHomeContainer >
        <Image
          src='/table-setting-desktop.png'
          alt="Table setting"
          layout="fill"
          objectFit="cover"
          objectPosition="center"/>
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
          En Celebrast puedes organizar
        </AboutCelebrastTitle>
        <div className={styles.container}>
          <div className={styles.collage_wrap}>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='g'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='g'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='g'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='g'/>
              </div>
            </div>
            <div className={styles.collage_item}>
              <div className={styles.collage_item_inner}>
                <Image src='/wedding.png'
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" alt='g'/>
              </div>
            </div>
          </div>
        </div>
      </AboutCelebrastContainer>
    </HomeContainer>
  )
}
