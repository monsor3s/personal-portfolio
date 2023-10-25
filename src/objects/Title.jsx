import styled from 'styled-components';
import PropTypes from 'prop-types'

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired
}

export default function Title({ className,children }) {
  return (
    <MainTitle className={className}>{children}</MainTitle>
  )
}
