import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'
import { IoClose } from 'react-icons/io5'
import { ItemList, List } from '../components/Header/styles';

export const MainMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 240px;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateY(50px);

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0px);
  `}

  > svg {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
  }
  `

export const ListMobile = styled(List)`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 0;
  gap: 15px;
  `

export const ItemListMobile = styled(ItemList)`
  
`

MenuMobile.propTypes = {
  menuIsVisible: PropTypes.node.isRequired,
  setMenuIsVisible: PropTypes.node.isRequired
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible}) {
  
  return (
    <MainMenu isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <ListMobile>
              <ItemListMobile><a href="#">Home</a></ItemListMobile>
              <ItemListMobile><a href="#about">About</a></ItemListMobile>
              <ItemListMobile><a href="#project">Projects</a></ItemListMobile>
              <ItemListMobile><a href="#contact">Contact</a></ItemListMobile>
      </ListMobile>
    </MainMenu>
  )
}
