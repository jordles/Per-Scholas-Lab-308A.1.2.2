import React from 'react'
import Article from './Article.jsx'
import Fashion1 from '../images/fashion-1.jpg'
import Fashion2 from '../images/fashion-2.jpg'
function Main() {
  const content1 = "Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi?Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! ld architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae."
  const content2 = "Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi?Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! ld architecto impedit consequatur r"
  return (
    <main>
      <Article date="11/12/20" title="On the Street In Brooklyn" imageSrc={Fashion1} alt="fashion-1" content={content1} />
      <Article date="11/11/20" title="Vintae in Vogue" imageSrc={Fashion2} alt="fashion-2" content={content2} />
    </main>
  )
}


export default Main