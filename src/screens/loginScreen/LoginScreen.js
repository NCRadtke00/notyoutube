import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(state => state.auth.accessToken)
  const handleLogin = () => {
    dispatch(login())
  }
  const history = useHistory()
  useEffect(() => {
    if (accessToken) {
      history.push("/")
    }
  }, [accessToken, history])
  return (
    <div className="login">
      <div className="login__container">
        <h2>A clone of youtube</h2>
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This Project was made possible with React, Redux, Youtube API, SCSS,
          Axios and Firebase!</p>
      </div>
    </div>
  )
}

export default LoginScreen;
