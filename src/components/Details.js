import { useState } from "react"
import { DetailsList } from "./DetailsList";

export const Details = ({Data}) => {
  //Content should be an object with all the informations to fill the component
  // see headerData.js
  
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = ()=>{
    setIsOpen(true);
  }
  const handleMouseLeave = ()=>{
    setIsOpen(false);
  }

  return (
          <details className="details-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} open={isOpen}>
            <summary>
              {Data.summary}
              <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
            </summary>
            <content>
              <DetailsList List={Data.content.list} />
            </content>
          </details>      
  )
}
