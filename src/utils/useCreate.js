import { useEffect, useState } from "react"

export const useCreate = () => {
  const baseIconUrl = 'https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.220805.388.c847323/p/'

  /*
  Can be changed in a more convenient structure but needs the other functions to be
  userData {mail, password, bDate{day, month, year}} this will retain all the informations for the fetch
  and date state could be changed into isLeap flag
  */
  const [userData, setUserData] = useState({
    mail: '',
    bDate: null,
    password: '',
  })

  const [date, setDate] = useState({
    day: null,
    month: null,
    year: null,
    isLeap: false
  })

  const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
  const [monthsLength, setMonthsLength] = useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  const countries = [{id:0, name:'Italia'}, {id:1, name:'Spagna'}, {id:2, name:'Francia'}, {id:3, name:'Germania'}, {id:4, name:'Portogallo'}, {id:5, name:'Norvegia'}, {id:6, name:'Austria'}]

  // Updates date for leap years
  useEffect(()=>{
    if (checkLeapYear(date.year) !== date.isLeap){
      setDate({...date, isLeap: checkLeapYear(date.year)})
      console.log(checkLeapYear(date.year), 'dentro', date.isLeap)
      setMonthsLength([31, (date.isLeap ? 28 : 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    }

    if (date.day < 0 || date.day > monthsLength[date.month - 1]){
      setDate({...date, day: null})
    }
  },[date, monthsLength, userData])

  useEffect(()=>{console.log(monthsLength)}, [monthsLength])

  const checkLeapYear = (year) => {
    return year > 1584 && ((year % 400 === 0) || (year %4 === 0 && year % 100 !== 0))
  }

  const onInputChange = (event) => {
    const changed = event.currentTarget
    const value = event.currentTarget.value
    switch(changed.name){
      case 'bDay': setDate({...date, day: value})
        break;
      case 'bMonth': setDate({...date, month: value})
        break;
      case 'bYear': setDate({...date, year: value})
        break;
      case 'mail': setUserData({...userData, mail: value.toLowerCase() })
        break;
      case 'password': setUserData({...userData, password: value})
        break;
      default: ;
    }
  }

  const optList = (type, length, selected = 0) => {
    let result = [];
    switch(type){
      case 'days':
        for (let i=1; i<=length; i++){
          result.push(<option key={i} value={i} >{i}</option>)
        }
        break;
      case 'months':
        result = months.map((month, index)=>(<option key={month} value={index + 1} >{month}</option>))
        break;
      case 'years':
        for(let i = (new Date().getFullYear() - length); i <= (new Date().getFullYear() - 10); i++ ){
          result.push(<option key={i} value={i} >{i}</option>)
        }
        break;
      default: console.warn('wrong input in optList');
    }
    return result
  }

  const onSubmit = () => {
    const bDate = {day: date.day, month: date.month, year: date.year}
    const fetchData = {
      ...userData,
      bDate: bDate
    }
    console.log(fetchData)
  }

  return ({
    baseIconUrl: baseIconUrl,
    countries: countries,
    monthsLength: monthsLength,
    userData: userData,
    date: date,
    onInputChange: onInputChange,
    optList: optList,
    onSubmit: onSubmit
  })
}
