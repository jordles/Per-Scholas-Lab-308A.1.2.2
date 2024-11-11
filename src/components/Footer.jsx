import React from 'react'
import Nav from './Nav'
function Footer() {
  const navItems = [
    { link: '#', text: 'Home' },
    { link: '#', text: 'Women\'s' },
    { link: '#', text: 'Men\'s' },
    { link: '#', text: 'On the Street' },
    { link: '#', text: 'The Catwalk' },
    { link: '#', text: 'AdWatch' },
    { link: '#', text: 'About' },
    { link: '#', text: 'Tips' },
  ];
  return (
    <footer>
      <Nav items={navItems} />
      <span>&copy; 2013 Valet Industries, Inc</span>
    </footer>
  )
}

export default Footer