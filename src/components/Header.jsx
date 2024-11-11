import React from 'react'
import Nav from './Nav'
function Header() {
  const navItems = [
    { link: '#', text: 'Women\'s' },
    { link: '#', text: 'Men\'s' },
    { link: '#', text: 'On the Street' },
    { link: '#', text: 'The Catwalk' },
    { link: '#', text: 'AdWatch' },
    { link: '#', text: 'About' },
  ];

  return (
    <header>
      <h1 className="title">Sartre's List</h1>
      <h2 className="subtitle">Better-Dressed People</h2>
      <Nav items={navItems} />
    </header>
  )
}

export default Header