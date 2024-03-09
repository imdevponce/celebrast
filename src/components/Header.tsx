'use client'
import { NavContainer, NavLink, LeftSectionInNav, RightSectionInNav, NavMenuContainer, MenuIcon } from './header.styles'
import Image from 'next/image'
export default function Nav (): JSX.Element {
  return (
    <NavContainer>
      <MenuIcon height={20} width={20}/>
      <LeftSectionInNav>
        <NavLink href="/">
          <Image src="/logo.png" alt="Celebrast logo" width={100} height={100}/>
        </NavLink>
        <NavMenuContainer>
          <NavLink href="/mi-celebracion">Mi celebración</NavLink>
          <NavLink href="/proveedores">Proveedores</NavLink>
          <NavLink href="/solicitudes">Solicitudes recientes</NavLink>
        </NavMenuContainer>
      </LeftSectionInNav>
      <RightSectionInNav>
        <NavLink $noMargin href="/ser-proveedor">¿Cómo ser proveedor?</NavLink>
        <NavLink $noMargin href="/login">
        Login
        </NavLink>
      </RightSectionInNav>

    </NavContainer>
  )
}
