'use client'
import { NavContainer, NavLink, LeftSectionInNav } from './header.styles'
import Image from 'next/image'

export default function Nav (): JSX.Element {
  return (
    <NavContainer>
      <LeftSectionInNav>
        <NavLink href="/">
          <Image src="/logo.png" alt="Celebrast logo" width={100} height={100}/>
        </NavLink>
        <nav>
          <NavLink href="/mi-celebracion">Mi celebración</NavLink>
          <NavLink href="/proveedores">Proveedores</NavLink>
          <NavLink href="/ser-proveedor">¿Cómo ser proveedor?</NavLink>
          <NavLink href="/solicitudes">Solicitudes recientes</NavLink>
          <NavLink href="/login">¿Cómo ser proveedor?</NavLink>
        </nav>
      </LeftSectionInNav>
      <NavLink href="/login">
        Login
      </NavLink>
    </NavContainer>
  )
}
