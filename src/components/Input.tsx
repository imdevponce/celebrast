'use client'
import PropTypes from 'prop-types'
import { InputComponent } from './input.styles'
export default function Input ({ placeholder = '', margin = '' }) {
  return (
    <InputComponent type="text" placeholder={placeholder} margin={margin}/>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  margin: PropTypes.string
}
