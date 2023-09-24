import React from 'react'
import { HeaderContainer, Menu } from './styles'

export default function Header() {
  return (
    <>
        <HeaderContainer>
            <h1>monsor3s</h1>
            <Menu>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </Menu>
        </HeaderContainer>
    </>
  )
}
