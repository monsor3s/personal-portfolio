import styled from 'styled-components';
import PropTypes from 'prop-types'

export const ItemTech = styled.p`
  width: 100px;
  height: 28px;
  font-size: 14px;
  background-color: #213229;
  color: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
`

ItemTechProject.propTypes = {
  children: PropTypes.node.isRequired
}

export default function ItemTechProject({children}) {
  return (
    <ItemTech>{children}</ItemTech>
  )
}
