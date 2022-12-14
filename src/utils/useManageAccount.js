import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// firebase database imports
import { getDatabase, ref, set, child, get, update } from "firebase/database";

export const useManageAccount = () => {
  const baseIconUrl =
    "https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.220805.388.c847323/p/";

  const navigate = useNavigate();
  // firebase authentication imports
  const { signup, login, logout, currentUser, festivity, setFirstAcess } =
    useAuth();

  /*
  Can be changed in a more convenient structure but needs the other functions to be modified
  userData {mail, password, bDate{day, month, year}} this will retain all the informations for the fetch
  and date state could be changed into isLeap flag
  */
  const [userData, setUserData] = useState({
    mail: "",
    bDate: { day: null, month: null, year: null },
    userName: "",
    avatar: {},
    password: "",
    rePassword: "",
  });

  // useEffect(() => {
  //   console.log("userData.bDate: ", userData.bDate);
  // }, [userData.bDate]);

  const [isLeap, setIsLeap] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const [isValidForm, setIsValidForm] = useState(false);

  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  const [monthsLength, setMonthsLength] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]);
  const countries = [
    { id: 0, name: "Italia" },
    { id: 1, name: "Spagna" },
    { id: 2, name: "Francia" },
    { id: 3, name: "Germania" },
    { id: 4, name: "Portogallo" },
    { id: 5, name: "Norvegia" },
    { id: 6, name: "Austria" },
  ];

  const [loginData, setLoginData] = useState({
    mail: "",
    password: "",
    remember: false,
  });

  // Database connection
  const db = getDatabase();
  const updates = {};

  function addGame(gioco) {
    const tutti = [];
    if (loggedUser?.games?.length && loggedUser?.games?.length > 0)
      tutti.push(...loggedUser.games);
    tutti.push(gioco);

    return tutti;
  }

  function addFunds(value, uid){
    let userCredit;
    userCredit = (Number(loggedUser?.credit) + Number(value)).toFixed(2);
    updates["/users/" + uid + "/credit"] = userCredit;
    return update(ref(db), updates);
  }

  useEffect(() => {
    currentUser ? setLoggedUser(onGetUser()) : setLoggedUser(null);
  }, [currentUser]);

  useEffect(() => {
    if (loggedUser?.bonus && festivity && loggedUser?.bonus?.active === false) {
      updates["/users/" + currentUser.uid + "/bonus"] = {
        active: true,
        used: false,
      };
    }
    if (
      festivity &&
      (loggedUser?.bonus?.active === false || undefined) &&
      (loggedUser?.bonus?.used !== true || undefined)
    ) {
      updates["/users/" + currentUser.uid + "/bonus"] = {
        active: true,
        used: false,
      };
    }
    if (loggedUser?.bonus?.active && !festivity) {
      updates["/users/" + currentUser.uid + "/bonus"] = {
        active: false,
        used: false,
      };
    }
    update(ref(db), updates);
  }, [loggedUser]);

  function writeUserData(userId, email, date, userName, avatar) {
    set(ref(db, "users/" + userId), {
      email: email,
      date: { ...date },
      userName: userName,
      avatar: avatar,
      games: [],
      subscription: false,
      bonus: { active: false, used: false },
      credit: 100,
    });
  }

  function userPurchases(uid, buy, item, price) {
    let userCredit;
    if (buy === "games") {
      const games = addGame(item);
      if (loggedUser.bonus.active && !loggedUser.bonus.used && +price > 14.99) {
        updates["/users/" + uid + "/bonus"] = { active: true, used: true };
      }
      userCredit = (loggedUser.credit - price).toFixed(2);
      updates["/users/" + uid + "/games"] = games;
      updates["/users/" + uid + "/credit"] = userCredit;
    }
    if (buy === "subscription") {
      const subscription = true;
      userCredit = (loggedUser.credit - 3.99).toFixed(2);
      updates["/users/" + uid + "/subscription"] = subscription;
      updates["/users/" + uid + "/credit"] = userCredit;
    }
    return update(ref(db), updates);
  }

  // Updates date for leap years
  useEffect(() => {
    if (checkLeapYear(userData.bDate.year) !== isLeap) {
      setIsLeap(checkLeapYear(userData.bDate.year));
      setMonthsLength([
        31,
        isLeap ? 28 : 29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ]);
    }

    if (
      userData.bDate.day < 0 ||
      userData.bDate.day > monthsLength[userData.bDate.month - 1]
    ) {
      setUserData({ ...userData, bDate: { ...userData.bDate, day: null } });
    }
  }, [monthsLength, userData]);

  const checkLeapYear = (year) => {
    return (
      year > 1584 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    );
  };

  const onInputChange = (event, avatar) => {
    if (event) {
      const changed = event.currentTarget;
      const value = event.currentTarget.value;
      switch (changed.name) {
        case "bDay":
          setUserData({
            ...userData,
            bDate: { ...userData.bDate, day: value },
          });
          break;
        case "bMonth":
          setUserData({
            ...userData,
            bDate: { ...userData.bDate, month: value },
          });
          break;
        case "bYear":
          setUserData({
            ...userData,
            bDate: { ...userData.bDate, year: value },
          });
          break;
        case "mail":
          setUserData({ ...userData, mail: value.toLowerCase() });
          break;
        case "userName":
          setUserData({ ...userData, userName: value });
          break;
        case "password":
          setUserData({ ...userData, password: value });
          break;
        case "rePassword":
          setUserData({ ...userData, rePassword: value });
          break;
        default:
      }
    } else if (avatar) {
      setUserData({ ...userData, avatar: avatar });
    }
  };

  const optList = (type, length, selected = 0) => {
    let result = [];
    switch (type) {
      case "days":
        for (let i = 1; i <= length; i++) {
          result.push(
            <option key={i} value={i}>
              {i}
            </option>
          );
        }
        break;
      case "months":
        result = months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ));
        break;
      case "years":
        for (
          let i = new Date().getFullYear() - 16;
          i >= new Date().getFullYear() - length;
          i--
        ) {
          result.push(
            <option key={i} value={i}>
              {i}
            </option>
          );
        }
        break;
      default:
        console.warn("wrong input in optList");
    }
    return result;
  };

  const onLoginInputChange = (event) => {
    const { name, value, checked } = event.currentTarget;
    setLoginData((data) => {
      return { ...data, [name]: name === "remember" ? checked : value };
    });
    const check =
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    const isValidMail =
      name === "mail" ? value.match(check) : loginData.mail.match(check);
    const isValidPassword =
      name === "password" ? value.length > 0 : loginData.password.length > 0;
    setIsValidForm(isValidMail && isValidPassword);
    setError("");
  };

  const onSubmit = async () => {
    if (userData.password !== userData.rePassword) {
      return setError("Le password non corrispondono");
    }

    try {
      setError("");
      setLoading(true);

      const authUser = (await signup(userData.mail, userData.password)).user;
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${authUser.uid}`));
      if (!snapshot.exists()) {
        festivity && setFirstAcess(true);
        writeUserData(
          authUser.uid,
          authUser.email,
          userData.bDate,
          userData.userName,
          userData.avatar
        );
        navigate("/");
      }
    } catch (e) {
      e.message === "Firebase: Error (auth/email-already-in-use)."
        ? setError(`E-mail gi?? utilizzata`)
        : setError(`Creazione account fallita`);
    }
    setLoading(false);
  };

  const onLogin = async (data) => {
    try {
      setError("");
      setLoading(true);

      const res = await login(data);

      if (res) navigate("/");
      else throw new Error("E-mail o password errata");
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  const onGetUser = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${currentUser?.uid}`));
      if (snapshot.exists()) {
        const result = snapshot.val();
        setLoggedUser(result);
      } else {
        throw new Error("Specified id is not in the database");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onLogout = async () => {
    const message = await logout();
    console.log(message);
  };

  return {
    baseIconUrl: baseIconUrl,
    countries: countries,
    monthsLength: monthsLength,
    userData: userData,
    date: userData.bDate,
    error: error,
    loading: loading,
    currentUser: currentUser,
    onInputChange: onInputChange,
    optList: optList,
    onSubmit: onSubmit,
    loginData: loginData,
    onLoginInputChange: onLoginInputChange,
    onLogin: onLogin,
    onGetUser: onGetUser,
    onLogout: onLogout,
    loggedUser: loggedUser,
    isValidForm: isValidForm,
    userPurchases: userPurchases,
    addGame: addGame,
    addFunds: addFunds,
    setLoggedUser: setLoggedUser
  };
};