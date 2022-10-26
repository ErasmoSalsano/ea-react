export const HeaderMenuIcon = () => { return <svg className="header-menu-icon" x="0px" y="0px" viewBox="0 0 20 16" /* style="enable-background:new 0 0 20 16" */><path className="st0" d="M1,2h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H1C0.4,0,0,0.4,0,1S0.4,2,1,2z M19,7H1C0.4,7,0,7.4,0,8s0.4,1,1,1h18 c0.6,0,1-0.4,1-1S19.6,7,19,7z M19,14H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S19.6,14,19,14z"></path></svg> }

export const HeaderMenuIcon2 = () => { return <svg className="header-menu-icon-2" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"><g><circle cx="14.143" cy="8" r="1.857"></circle><circle cx="7.996" cy="8" r="1.857"></circle><circle cx="1.857" cy="8" r="1.857"></circle></g></svg> }

export const NavList = [
  {
    summary: 'Giochi',
    content: {
      list: {
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
              },
              {
                text: 'EA SPORTS',
                href: '/pages/games/EA-SPORTS.html'
              },
              {
                text: 'Giochi gratuiti',
                href: '/pages/games/freegames.html'
              },
              {
                text: 'Libreria dei giochi',
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
              },
              {
                text: 'Xbox Series X',
                href: '/pages/games/xbox.html'
              },
              {
                text: 'Nintendo Switch™',
                href: null
              },
              {
                text: 'Cellulari',
                href: null
              }
            ]
          }
        ]
      }
    }
  },

  {
    summary: 'Altre esperienze',
    content: {
      list: {
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
          },
          {
            text: 'Competizioni videoludiche',
            href: null
          },
          {
            text: 'Diretta di EA Play',
            href: null
          }
        ]
      }
    }
  },

  {
    summary: 'Informazioni',
    content: {
      list: {
        hasSublist: false,
        title: null,
        data: [
          {
            text: 'Società',
            href: '/pages/informazioni/about.html'
          },
          {
            text: 'EA Studi',
            href: null
          },
          {
            text: 'Lavora con noi',
            href: null
          },
          {
            text: 'La nostra tecnologia',
            href: null
          },
          {
            text: 'Notizie',
            href: '/pages/informazioni/news.html'
          },
          {
            text: 'Inside EA',
            href: '/pages/informazioni/insideEA.html'
          }
        ]
      }
    }
  },

  {
    summary: 'Impegni',
    content: {
      list: {
        hasSublist: false,
        title: null,
        data: [
          {
            text: 'I nostri impegni',
            href: '/pages/commitments/positive-play.html'
          },
          {
            text: 'Gioco positivo',
            href: null
          },
          {
            text: 'Diversità e inclusione',
            href: null
          },
          {
            text: 'Impatto sociale',
            href: null
          },
          {
            text: 'Persone e cultura',
            href: null
          },
          {
            text: 'Ambiente',
            href: null
          }
        ]
      }
    }
  },

  {
    summary: 'Risorse',
    content: {
      list: {
        hasSublist: false,
        title: null,
        data: [
          {
            text: 'Aiuto',
            href: null
          },
          {
            text: 'Forum',
            href: null
          },
          {
            text: 'Filtro famiglia',
            href: null
          },
          {
            text: 'Accessibilità',
            href: null
          },
          {
            text: 'Stampa',
            href: null
          },
          {
            text: 'Investitori',
            href: null
          },
          {
            text: 'Test di gioco',
            href: null
          }
        ]
      }
    }
  },

]