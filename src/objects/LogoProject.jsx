import styled from 'styled-components';
import PropTypes from 'prop-types'

export const Logo = styled.img`
  width: 80px;
  height: 28px;
  opacity: 0.28;
`

LogoProject.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
}

export default function LogoProject({ src, alt }) {
  return (
    <Logo src={src} alt={alt}></Logo>
  )
}
