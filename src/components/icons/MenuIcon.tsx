import PropTypes from 'prop-types'

interface Props {
  height: number
  width: number
}

function MenuIcon ({ height, width }: Props) {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"></path>
    </svg>
  )
}

export default MenuIcon

MenuIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}
