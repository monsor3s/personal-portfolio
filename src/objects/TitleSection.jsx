import styled from 'styled-components';
import PropTypes from 'prop-types'

export const MainTitleSection = styled.span`
  width: 80px;
  height: 38px;
  background-color: rgba(0,0,0,.05);
  padding: 4px 10px;
  font-weight: 600;
  font-size: 12px;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`

TitleSection.propTypes = {
  children: PropTypes.node.isRequired
}

export default function TitleSection({ children }) {
  return (
    <MainTitleSection>{children}</MainTitleSection>
  )
}
