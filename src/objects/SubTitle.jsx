import styled from 'styled-components';
import PropTypes from 'prop-types'

export const MainSubTitle = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #767676;
  line-height: 30px;
  letter-spacing: .5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
}

export default function SubTitle({ className,children }) {
  return (
    <MainSubTitle className={className}>{children}</MainSubTitle>
  )
}
