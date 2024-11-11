import React from 'react'

function Nav({items}) {
  return (
    <nav>
      <ul aria-label="Main Navigation" role="navigation">
        {items.map((item, index) => (
          <li key={index}><a href={item.link}>{item.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav