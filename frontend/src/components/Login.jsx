import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import LoginLight from "/LoginLight.png";
import LoginDark from "/LoginDark.png";
import FormComponents from "./FormComponents";
import PropTypes from "prop-types"
function Login({isLogin}) {
  const { theme } = useContext(ThemeContext);
  const [IsLogin, setIsLogin] = useState(isLogin);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!IsLogin);
    const newPath = !IsLogin ? "/auth=login" : "/auth=signup";
    navigate(newPath);
  };

  return (
    <div
      className={`flex lg:flex-row flex-col w-full md:px-10 px-5 md:pt-[140px] pt-32  pb-8 ${
        IsLogin ? "lg:h-[800px]" : "lg:h-[950px]"
      }`}
    >
      <div className="flex lg:flex-row flex-col w-full h-full border rounded-lg overflow-hidden">
        <div className="flex lg:w-[60%] w-full">
          <img
            src={theme === "dark" ? LoginDark : LoginLight}
            alt="login/sign-image"
            className="w-full md:rounded-l-lg"
          />
        </div>
        <div className="flex lg:w-[40%] w-full relative">
          {theme === "light" ? (
            <div className="bg-blue"></div>
          ) : (
            <div className="bg-blue-4"></div>
          )}
          <div className="bg-pink"></div>
          <div className="bg-pink-2"></div>
          {theme === "light" ? (
            <div className="bg-blue-2"></div>
          ) : (
            <div className="bg-blue-3"></div>
          )}
          <div className="flex flex-col gap-4 w-full md:py-8 py-4 md:mx-20 mx-5 my-4 md:my-12">
            {/*  logo */}
            <h1 className="text-pink-500 text-center font-bold text-2xl">
              BooksAdda
            </h1>
            <div className=" bg-[#E7F0DC] w-full h-[1.5px]" />
            <div className="flex flex-col gap-3 py-4">
              <h2 className="text-3xl font-bold">
                {IsLogin ? "Sign in" : "Sign up"} to BooksAdda
              </h2>
              <p className="text-[#686D76]">
                {IsLogin ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <span
                      className="text-pink-500 font-semibold cursor-pointer"
                      onClick={toggleForm}
                    >
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      className="text-pink-500 font-semibold cursor-pointer"
                      onClick={toggleForm}
                    >
                      Sign in
                    </span>
                  </>
                )}
              </p>
            </div>
            <div className="bg-[#E7F0DC] w-full h-[2px]" />
            <FormComponents IsLogin={IsLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}
export default Login;
