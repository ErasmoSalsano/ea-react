import { useEffect, useState } from "react"

// Custom hook for UserSpace component

export const useUserBoard = () => {
  // Will be moved in custom hook
  const body = document.querySelector('body')
  const userBoardElement = document.querySelector('.user-board')
  
  //It could be changed into an object with three properties
  const [userBoard, setUserBoard] = useState(false)
  const [accountBoard, setAccountBoard] = useState(false)
  const [helpBoard, setHelpBoard] = useState(false)

  // Needed to prevent first render animation.
  const [start, setStart] = useState(false)

  useEffect(()=>{
    !start && userBoard && setStart(true)
    start && (userBoard ? userBoardElement.removeAttribute('closed') : userBoardElement.setAttribute('closed', ''));
    start && userBoard ? (body.style.overflow ='hidden') : (body.style.overflow = 'auto')
  }, [start, userBoard])


  /* 
    checks wich board to open given the current situation.
    userBoard is the outer one and accountBoard and HelpBoard are the inner ones.
    if the click is on the open board it will close all
    if the userBoard is closed it will open the one that's been clicked
    else it will toggle both, so that the open one will change
  */

  const closeBoard = ()=>{ setAccountBoard(false); setHelpBoard(false); setUserBoard(false)}

  const checkBoard = (e) => {
    const name = e.target.getAttribute('trigger')
    switch(name){
      case 'accountBoard':
        if (userBoard) {
          if(accountBoard) {closeBoard()}
          else {setHelpBoard(false); setAccountBoard(true)}
        }
        else {setUserBoard(true); setAccountBoard(true)}
        break;
      case 'helpBoard':
        if (userBoard) {
          if(helpBoard) {closeBoard()}
          else {setAccountBoard(false); setHelpBoard(true)}
        }
        else {setUserBoard(true); setHelpBoard(true)}
        break;
      default: break;
    }
  }

  // A click on the window will close the board (exept for clicks inside the board, thanks to click stopPropagation)
  window.addEventListener('click', closeBoard)

  return({
    start: start,
    userBoard: userBoard,
    accountBoard: accountBoard,
    helpBoard: helpBoard,
    checkBoard: checkBoard,
    closeBoard: closeBoard
  })
}