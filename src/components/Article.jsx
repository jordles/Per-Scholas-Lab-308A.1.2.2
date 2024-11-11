import React from 'react'
import Image from './Image'
const Article = ({ date, title, imageSrc, alt, content }) => (
  <article>
    <date>{date}</date>
    <h2>{title}</h2>
    <Image imageSrc={imageSrc} title={alt} />
    <p>{content}</p>
    <ContinueButton />
  </article>
);


const ContinueButton = () => (
  <div className="continue"><a href="#">Continues ...</a></div>
);

export default Article