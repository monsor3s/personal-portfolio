import styled from 'styled-components';
import PropTypes from 'prop-types'

export const Screenshot = styled.img`
  width: 445px;
  height: 320px;

  @media (max-width: 1200px) {
    width: 420px;
  }

  @media (max-width: 1024px) {
    width: 360px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
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
