import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuRHPPSc_pDqO_HQUGQ_-t_OYSfXhwSS8",
  authDomain: "imdb-349309.firebaseapp.com",
  projectId: "imdb-349309",
  storageBucket: "imdb-349309.appspot.com",
  messagingSenderId: "509599533215",
  appId: "1:509599533215:web:2895f1e0023b19bf213aaa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
