import styled from 'styled-components';
import PropTypes from 'prop-types'

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 1.4;
`

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default function Title({ children }) {
  return (
    <MainTitle>{children}</MainTitle>
  )
}
