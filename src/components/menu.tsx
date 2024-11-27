import { Chapters, ClickFunction } from '../types/types'



const Menu = ({allChapters, onClick}: {
  allChapters: Chapters | undefined, 
  onClick: ClickFunction
}) => {

  if (!allChapters) {
    return null;
  }

   return (
      <>
       <a href="#menu" id="menuLink" className="menu-link">
           <span>Open Menu</span>
       </a>
       
       <div id="menu">
           <div className="pure-menu">
               <a className="pure-menu-heading" href="/">Table of Contents</a>
   
               <ul className="pure-menu-list">
                 <li className="pure-menu-item">
                  
                   {allChapters.map((chapter) => {
                      return <a onClick={(e) => onClick(chapter, e)}  key={chapter} href={chapter} className="pure-menu-link">{chapter}</a>
                   })}
                   
                 </li>
               </ul>
           </div>
       </div>
     </>
   )
}

export { Menu }