import { Link } from "react-router-dom"

/* 
This component is for rendering lists in the navbar and accepts list objets, even with nested lists like so:

normal list: {
  hasSublist: false,
  title: null,
  data: [
    {
      text: 'EA play',
      href: '/pages/informazioni/about.html'
    },
    {
      text: 'l\'EA app',
      href: null
    }
  ]
}

or 

nested list: {
  hasSublist: true,
  title: null,
  data: [
    {
      hasSublist: false,
      title: 'ESPLORA GIOCHI',
      data: [
        {
          text: 'Ultimi giochi',
          href: '/pages/games/lastgames.html'
        },
        {
          text: 'Prossimamente',
          href: null
        }
      ]
    },

    {
      hasSublist: false,
      title: 'PIATTAFORME',
      data: [
        {
          text: 'PC',
          href: '/pages/games/pc.html'
        },
        {
          text: 'PlayStation®5',
          href: '/pages/games/ps5.html'
        }
      ]
    }
  ]
}
*/
export const DetailsList = ({ List, IsSublist = false }) => {
  return (
    IsSublist
      ? (<ul className="end-ul">
        {List.map((element) => {
          return (
            <li key={element.text}>
              <Link to={element.href ? element.href : '/maintenaince'}>{element.text}</Link>
            </li>
          )
        })}
      </ul>)
      : List.hasSublist
        ? <ul className='inner-ul flex'>
          {List.data.map((item) => {
            return (
              <li key={item.title} className='inner-list'><div>
                <div className="header-navbar-title">
                  {item.title}
                </div>
                <DetailsList List={item.data} IsSublist={true} />
              </div></li>
            )
          })
          }
        </ul>
        : <ul className="inner-ul">
          {List.data.map((item) => {
            return (
              <Link key={item.text} to={item.href ? item.href : '/maintenaince'}> {/* Questo è da cambiare quando si aggiungerà il routing */}
                <li >{item.text}</li>
              </Link>
            )
          })}
        </ul>
  )
}
