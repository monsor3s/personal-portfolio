import { useEffect, useState } from 'react'
import { HeaderContainer, ItemList, List, Menu, TitleHeader } from './styles'

import { RxHamburgerMenu } from 'react-icons/rx'
import { MenuMobile } from '../../objects/MenuMobile';

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer scroll={scroll}>
        <TitleHeader>monsor3s</TitleHeader>
        <Menu>
          <MenuMobile 
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
          <List>
              <ItemList><a href="#">Home</a></ItemList>
              <ItemList ><a href="#about">About</a></ItemList>
              <ItemList><a href="#project">Projects</a></ItemList>
              <ItemList><a href="#contact">Contact</a></ItemList>
          </List>
          <RxHamburgerMenu onClick={() => setMenuIsVisible(true)} size={30}/>
        </Menu>
      </HeaderContainer>
    </>
  )
}
