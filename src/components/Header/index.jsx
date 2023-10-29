import { useEffect, useState } from 'react'
import { Bar, HeaderContainer, ItemList, List, Menu, MenuToggle, TitleHeader } from './styles'

export default function Header() {
  const [scroll, setScroll] = useState(0);

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
          <MenuToggle>
            <Bar />
            <Bar />
            <Bar />
          </MenuToggle>
          <List>
              <ItemList><a href="#">Home</a></ItemList>
              <ItemList ><a href="#about">About</a></ItemList>
              <ItemList><a href="#project">Projects</a></ItemList>
              <ItemList><a href="#contact">Contact</a></ItemList>
          </List>
        </Menu>
      </HeaderContainer>
    </>
  )
}
