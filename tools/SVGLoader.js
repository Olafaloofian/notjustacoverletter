import React from 'react'
import svgSprite from '../assets/svgSprite.svg'
import PropTypes from 'prop-types'

const SVGLoader = ({ name, color, size }) => (
    <svg className={`icon-${name}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${svgSprite}#icon-${name}`} />
    </svg>
)

SVGLoader.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
}

export default SVGLoader