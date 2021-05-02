import firebase from "firebase/app";
import auth from "../../firebase";

export const login = () => async (dispatch) => {
  try {
    const provider = new firebase.autho.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (errror) {}
};
