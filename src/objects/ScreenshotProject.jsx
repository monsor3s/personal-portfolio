import styled from 'styled-components';
import PropTypes from 'prop-types'

export const Screenshot = styled.img`
  width: 445px;
  height: 320px;
`

ScreenshotProject.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired
}

export default function ScreenshotProject({ src, alt, className }) {
  return (
    <Screenshot className={className} src={src} alt={alt}></Screenshot>
  )
}
