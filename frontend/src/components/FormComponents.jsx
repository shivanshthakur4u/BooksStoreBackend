import { useEffect, useState } from "react";
import EyeSlash from "../assets/eye-slash";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function FormComponents({ IsLogin }) {
  const [passwordType, setPasswordType] = useState("password");
  // console.log("current form:", IsLogin);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    if (IsLogin) {
      try {
        const UserInfo = {
          email: data.email,
          password: data.password,
        };
        const res = await axios({
          url: `${import.meta.env.BACKEND_URL}/user/signin`,
          data: UserInfo,
          method: "POST",
        });
        //  console.log(res.data.success);
        if (res.data?.success) {
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
          toast.success(res.data?.message);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    } else {
      try {
        const UserInfo = {
          name: data.fullname,
          email: data.email,
          password: data.password,
        };
        const res = await axios({
          url: `${import.meta.env.BACKEND_URL}/user/signup`,
          data: UserInfo,
          method: "POST",
        });
        // console.log(res.data);
        if (res?.data?.success) {
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
          toast.success(res.data?.message);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    reset();
  }, [IsLogin, reset]);

  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col ${
        IsLogin ? "gap-8" : "gap-6"
      } dark:bg-slate-900 dark:text-white`}
    >
      {/* name */}
      {!IsLogin && (
        <div className="flex w-full flex-col gap-1">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 dark:text-slate-800"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow dark:text-slate-800 bg-white"
              placeholder="Full Name"
              {...register("fullname", { required: true })}
            />
          </label>
          {errors.fullname && (
            <span className="text-xs font-medium text-red-600">
              Full Name is a required field
            </span>
          )}
        </div>
      )}
      {/* email */}
      <div className="flex w-full flex-col gap-1">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 dark:text-slate-800 "
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow dark:text-slate-800"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && (
          <span className="text-xs font-medium text-red-600">
            Email is a required field
          </span>
        )}
      </div>
      {/* password */}
      <div className="flex w-full flex-col gap-1">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 dark:text-slate-800 "
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={passwordType}
            className="grow dark:text-slate-800 bg-white"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <EyeSlash
            passwordType={passwordType}
            setPasswordType={setPasswordType}
          />
        </label>
        {errors.password && (
          <span className="text-xs font-medium text-red-600">
            Password is a required field
          </span>
        )}
      </div>
      {/* confirm Password */}
      {!IsLogin && (
        <div className="flex w-full flex-col gap-1">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 dark:text-slate-800 "
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow dark:text-slate-800"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password ||
                  "Password & Confirm Password do no match",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-xs font-medium text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      )}
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-pink-500 text-white border-2 border-pink-500 z-50
       hover:bg-white hover:border-2 hover:border-pink-500 hover:text-pink-500 duration-300"
      >
        {IsLogin ? " Sign In" : " Sign Up"}
      </button>
    </form>
  );
}

FormComponents.propTypes = {
  IsLogin: PropTypes.bool.isRequired,
};

export default FormComponents;
