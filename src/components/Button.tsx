'use client'
import { type ReactNode } from 'react'
import { ButtonComponent } from './button.styles'
import PropTypes from 'prop-types'

interface ButtonProps {
  children?: ReactNode
  width?: string
}

export default function Button ({ children }: ButtonProps) {
  return (
    <ButtonComponent> {children}</ButtonComponent>
  )
}
Button.propTypes = {
  children: PropTypes.node
}
