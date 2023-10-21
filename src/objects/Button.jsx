import styled from 'styled-components';
import PropTypes from 'prop-types'

export const MainButton = styled.button`
  width: 206px;
  height: 60px;
  background-color: #000;
  color: #fff;
  padding: 13px 48px;
  border: 2px solid #000;

  &:hover {
    background-color: transparent;
    color: #000;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1200px) {
    margin-top: 10px;
  }
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired
}

export default function Button({ children, onClick }) {
  return (
    <MainButton onClick={onClick}>{children}</MainButton>
  )
}
