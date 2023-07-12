import React, { useContext, useMemo, useState } from "react";
import useForm from "../../hooks/useForm";
import "./Auth.css";
import googlePlay from "../../assets/googlePlay.png";
import microsoft from "../../assets/microsoft.png";
import {
  GlobalContext,
  GlobalDispatchContext,
} from "../../state/context/GlobalContext";
import { AiFillFacebook } from "react-icons/ai";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { handlePromise } from "../../utils/handlePromise";
import { toast } from "react-hot-toast";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import useFetchCurrentUser from "../../utils/fetchCurrentUser";
import insta_word from "../../assets/Instagramword.png";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const { isAuthenticated, isOnboarded, user, isLoading } =
    useContext(GlobalContext);

  const { fetchUser } = useFetchCurrentUser();

  const dispatch = useContext(GlobalDispatchContext);

  const { form, onChangeHandler, resetForm } = useForm({
    email: "",
    password: "",
  });

  const {
    form: onboardingForm,
    onChangeHandler: onboardingFormOnChangeHandler,
  } = useForm({
    username: "",
    fullname: "",
  });

  const authenticate = async () => {
    if (isLoginForm) {
      const [data, loginError] = await handlePromise(
        signInWithEmailAndPassword(auth, form.email, form.password)
      );
      return loginError;
    } else {
      const [data, signupError] = await handlePromise(
        createUserWithEmailAndPassword(auth, form.email, form.password)
      );
      return signupError;
    }
  };

  const setUserData = async () => {
    try {
      const userCollection = collection(db, "users");
      const userQuery = query(
        userCollection,
        where("username", "==", onboardingForm.username)
      );
      const usersSnapshot = await getDocs(userQuery);

      if (usersSnapshot.docs.length > 0) {
        toast.error("Имя пользователя существует");
        return;
      }

      await setDoc(doc(db, "users", auth.currentUser.email), {
        fullname: onboardingForm.fullname,
        username: onboardingForm.username,
        email: auth.currentUser.email,
        id: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });

      toast.success("Добро пожаловать!");

      dispatch({
        type: "SET_IS_ONBOARDED",
        payload: {
          isOnboarded: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
      payload: {
        isLoading: true,
      },
    });

    let error = null;

    error = await authenticate();

    // await fetchUser()
    const userData = await fetchUser();

    if (userData) {
      dispatch({
        type: "SET_USER",
        payload: {
          user: userData,
        },
      });
      dispatch({
        type: "SET_IS_ONBOARDED",
        payload: {
          isOnboarded: true,
        },
      });
    }

    dispatch({
      type: "SET_LOADING",
      payload: {
        isLoading: false,
      },
    });
    if (error) toast.error(error.message);
    if (!error)
      toast.success(
        `Вы успешно ${isLoginForm ? "вошли" : "зарегистрировались"}`
      );
    resetForm();
  };

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
  }, [form]);

  const onboardingSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
      payload: {
        isLoading: true,
      },
    });
    await setUserData();
    dispatch({
      type: "SET_LOADING",
      payload: {
        isLoading: false,
      },
    });
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__body">
          <div className="auth__main">
            <div className="auth__content">
              {!isAuthenticated && (
                <form className="auth__form" onSubmit={submitHandler}>
                  <div className="logo">
                    <img src={insta_word} alt="" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeHandler}
                    value={form.email}
                    placeholder="Phone number, username or email"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChangeHandler}
                    value={form.password}
                    placeholder="Password"
                  />
                  <button type="submit" className="" disabled={isDisabled}>
                    {isLoginForm ? "Log in" : "Register"}
                  </button>
                  <p className="auth__or">OR</p>
                  <p className="auth__facebook">
                    <AiFillFacebook style={{ fontSize: "25px" }} />
                    {isLoginForm ? "Log in" : "Register"} with Facebook
                  </p>
                  {isLoginForm && (
                    <span className="auth__pass">Forgot password?</span>
                  )}
                </form>
              )}
              {isAuthenticated && !isOnboarded && (
                <form className="auth__form" onSubmit={onboardingSubmitHandler}>
                  <div className="logo">
                    <img src={insta_word} alt="" />
                  </div>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    onChange={onboardingFormOnChangeHandler}
                    value={onboardingForm.username}
                    placeholder="Username"
                  />
                  <input
                    type="fullname"
                    name="fullname"
                    id="fullname"
                    onChange={onboardingFormOnChangeHandler}
                    value={onboardingForm.fullname}
                    placeholder="Full name"
                  />
                  <button
                    type="submit"
                    className=""
                    disabled={
                      !onboardingForm.username && !onboardingForm.fullname
                    }
                  >
                    Send
                  </button>
                </form>
              )}
              <div className="auth__reg">
                <p>
                  {isLoginForm
                    ? "Don't have an account ?"
                    : "Already, have an account ?"}{" "}
                  <button onClick={() => setIsLoginForm((prev) => !prev)}>
                    {isLoginForm ? "Register" : "Log in"}
                  </button>
                </p>
              </div>
              <div className="auth__apps">
                <span>Get app</span>
                <div className="apps">
                  <img src={googlePlay} />
                  <img src={microsoft} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
