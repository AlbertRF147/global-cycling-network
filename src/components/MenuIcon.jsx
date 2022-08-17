import { css } from '@emotion/css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const styles = {
  button: {
    border: 'none',
    background: 'none',
    height: 50,
    width: 40
  },
  icon: {
    height: '100%',
    width: '100%',
  }
}

const icons = {
  search: <FontAwesomeIcon icon={solid('magnifying-glass')} color='white' size='xl' />,
  burger: <FontAwesomeIcon icon={solid('bars')} color='white' size='xl' />
}

function MenuIcon({ type, clickHandler }) {
  const icon = icons[type]
  return (
    <button className={css({ ...styles.button })} onClick={clickHandler}>
      {icon}
    </button>
  )
}

export default MenuIcon