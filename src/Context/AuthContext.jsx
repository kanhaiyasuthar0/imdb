import { onAuthStateChanged, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isEnglish, setisEnglish] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [color, setColor] = useState("light");
  const [vId, setVId] = useState("");
  const [progress, setProgress] = useState(0);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [popup, setPopup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  onAuthStateChanged(auth, (currentUSer) => {
    setLoggedInUser(currentUSer);
  });
  const logoutUser = () => {
    signOut(auth);
  };
  const [WatchTrailerData, setWatchTrailerData] = useState({});
  const [rateFlag, setRateFlag] = useState(false);

  const naviagte = useNavigate();
  const login = (token) => {
    setIsAuth(true);
    navigate("/");
    setToken(token);
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/login");
    setToken("");
  };
  const handleColor = () => {
    setColor(color === "light" ? "dark" : "light");
  };

  const handleSearch = (title) => {
    setProgress(30);

    getYT(title);
  };

  let arr = [
    "AIzaSyCdkSUDMRM0nqFxIZpIujLEWkrtX7W8H6c",
    "AIzaSyDV4mL7oAMtNA6aIF_WM_o_VYZzrv_xKyQ",
    "cd1b752287267fcdd91d7693d2fb5336",
    "AIzaSyBPo8ftIoPViBJeLeAgOLS0sZXDq0l-IMA",
  ];
  const getYT = async (title) => {
    setProgress(50);
    let res1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=${arr[1]}`
    );
    let res2 = await res1.json();
    console.log(res2.items[0]);
    const {
      id: { videoId },
    } = res2.items[0];
    console.log(videoId);
    setVId(videoId);
    setProgress(100);
    setPopup(false);
    naviagte("/watch");
  };
  const navigateHome = () => {
    setTimeout(() => {
      naviagte("/");
    }, 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        setVId,
        vId,
        setProgress,
        progress,
        setWatchTrailerData,
        WatchTrailerData,
        login,
        isAuth,
        token,
        logout,
        handleColor,
        color,
        handleSearch,
        popup,
        setPopup,
        base_url,
        setisEnglish,
        isEnglish,
        setIsChecked,
        isChecked,
        rateFlag,
        setRateFlag,
        isSuccess,
        setIsSuccess,
        navigateHome,
        loggedInUser,
        logoutUser,
        arr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
