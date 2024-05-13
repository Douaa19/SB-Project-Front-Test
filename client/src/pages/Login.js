import React, { useEffect, useState } from "react";
import {
  LoginCard,
  ForgetPasswordPopup,
  ResetPasswordPopup,
  SignupCard,
} from "../components/molecules";
import { ReactComponent as LoginImg } from "../assets/images/Mobile-login-pana.svg";
import { Popup } from "../components/organismes";
import { setForgetPassword, setResetPassword } from "../redux/actions/popups";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const params = useParams();
  const forgetPasswordPopup = useSelector((state) => state.forgetPasswordPopup);
  const resetPasswordPopup = useSelector((state) => state.resetPasswordPopup);
  const [signIn, setSignIn] = useState("login");

  useEffect(() => {
    dispatch(setForgetPassword(false));
    dispatch(setResetPassword(false));
    if (params.resetToken) {
      dispatch(setResetPassword(true));
    }
  }, []);

  return (
    <>
      <div className="bg-gray h-screen flex justify-center items-center">
        <div className="md:min-w-[50rem] sm:min-w-[40rem] ssm:min-w-[25rem] flex justify-between items-center bg-white rounded-md shadow-md px-4 py-5 m-2">
          <div className="background-img h-full w-full sm:block ssm:hidden">
            {signIn === "login" ? <LoginImg /> : <LoginImg />}
          </div>
          <div className="w-full p-8">
            <div className="">
              <div className="pb-6">
                <h4 className="font-bold md:text-24 ssm:text-18 text-center py-2">
                  Login
                </h4>
              </div>
              <div className="capitalize flex justify-around w-full items-center text-16 font-semibold pb-10">
                <div
                  className={`w-full flex flex-col justify-center items-center`}
                  onClick={() => setSignIn("login")}>
                  <span
                    className={`${
                      signIn !== "login" ? "text-gray" : "text-dark"
                    } hover:cursor-pointer pb-2 md:text-14 ssm:text-12 transition-all`}>
                    Sign in
                  </span>
                  <span
                    className={`${
                      signIn !== "login" ? "bg-gray" : "bg-dark"
                    }  h-1 w-full rounded-md transition-all`}></span>
                </div>
                <div
                  className={`w-full flex flex-col justify-center items-center`}
                  onClick={() => setSignIn("createAccount")}>
                  <span
                    className={`${
                      signIn !== "createAccount" ? "text-gray" : "text-dark"
                    } hover:cursor-pointer pb-2 md:text-14 ssm:text-12 transition-all`}>
                    Create account
                  </span>
                  <span
                    className={`${
                      signIn !== "createAccount" ? "bg-gray" : "bg-dark"
                    }  h-1 w-full rounded-md transition-all`}></span>
                </div>
              </div>
            </div>

            {signIn === "login" ? (
              <div className="login">
                <LoginCard />
              </div>
            ) : (
              <div className="signup">
                <SignupCard />
              </div>
            )}

            {forgetPasswordPopup && (
              <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <Popup>
                  <ForgetPasswordPopup />
                </Popup>
              </div>
            )}
            {resetPasswordPopup && (
              <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <Popup>
                  <ResetPasswordPopup />
                </Popup>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
