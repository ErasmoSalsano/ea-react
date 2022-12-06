import { useState } from "react";



export const usePopup = () => {
  

  // const [userBoardOpen, setUserBoardOpen] = useState(false);
  const [popMenuOpen, setPopMenuOpen] = useState(false);
  const [popNavOpen, setPopNavOpen] = useState(false);
  const [popGamesOpen, setPopGamesOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [gamesHidden, setGamesHidden] = useState(false);

  // Will be moved in custom hook
  const openElement = (element) => {
    switch (element) {
      case 'popMenu': 
        setPopMenuOpen(true)
        if(window.innerWidth < 1032){
          openElement('popNav');
        }
        else{
          openElement('popGames');
        }
        break;
      case 'popNav': 
        setGamesHidden(true)
        setPopNavOpen(true)
        break;
      case 'popGames': 
        setNavHidden(true)
        setPopGamesOpen(true)
        break;
      default: console.warn('Wrong parameter passed to openElement function')
    }
  }

  const onMenuClick = () => {
    openElement('popMenu')
  }

  const onPopNavClick = () => {
    setPopNavOpen(false);
    setPopGamesOpen(false);
    setTimeout(() => {
      setNavHidden(false)
      setGamesHidden(false)
      setPopMenuOpen(false);
      // popNav.style.display ='block';
  }, 500);
  }

  return({
    // userBoardOpen: userBoardOpen,
    navHidden: navHidden,
    gamesHidden: gamesHidden,
    popMenuOpen: popMenuOpen,
    popNavOpen: popNavOpen,
    popGamesOpen: popGamesOpen,
    onMenuClick: onMenuClick,
    onPopNavClick: onPopNavClick
  })
}