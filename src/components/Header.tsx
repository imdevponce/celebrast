'use client'
import { NavContainer, NavLink, LeftSectionInNav, RightSectionInNav, NavMenuContainer } from './header.styles'
import MenuIcon from './icons/MenuIcon'
import Image from 'next/image'
export default function Nav (): JSX.Element {
  return (
    <NavContainer>
      <MenuIcon height={30} width={30}/>
      <LeftSectionInNav>
        <NavLink href="/">
          <Image src="/logo.png" alt="Celebrast logo" width={60} height={60}/>
        </NavLink>
        <NavMenuContainer>
          <NavLink href="/mi-celebracion">Mi celebración</NavLink>
          <NavLink href="/proveedores">Proveedores</NavLink>
          <NavLink href="/solicitudes">Solicitudes recientes</NavLink>
        </NavMenuContainer>
      </LeftSectionInNav>
      <RightSectionInNav>
        <NavLink $noMargin $primaryColor href="/ser-proveedor">¿Cómo ser proveedor?</NavLink>
        <NavLink $noMargin href="/login">
        Login
        </NavLink>
      </RightSectionInNav>

    </NavContainer>
  )
}
