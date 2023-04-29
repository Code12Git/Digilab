import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";
const Onboarding = () => {
  const [theme, setTheme] = useState("light");
  const [buttonText, setButtonText] = useState("Dark Mode");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setButtonText("Light Mode");
    } else {
      document.documentElement.classList.remove("dark");
      setButtonText("Dark Mode");
    }
  }, [theme]);

  const handleThemeswitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="dark:bg-slate-900 w-screen h-screen ">
      <div className="text-right mr-6 ">
        <button
          className="bg-green-200 p-2 rounded-md mt-2 "
          onClick={handleThemeswitch}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center">
          <h3
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl drop-shadow 
          font-extrabold"
          >
            Lookscout
          </h3>
        </div>
        <div className="m-auto">
          <div className="flex justify-evenly gap-24 items-center mt-2 dark:bg-slate-700 bg-slate-100 p-4 rounded-md w-192">
            <div className="flex-col  text-center items-center  ">
              <img src="/padlock.png" className="h-7 ml-3 dark:hidden" />
              <CheckCircleIcon class="h-7 hidden dark:block dark:ml-3" />
              <h4>Account</h4>
            </div>

            <div className="flex-col  items-center ">
              <img src="/user.png" className="h-7 ml-3 dark:hidden" />
              <img src="/2.png" class="h-7 hidden dark:block dark:ml-3" />
              <h4>Personal</h4>
            </div>

            <div className="flex-col  items-center ">
              <img src="/Bill.png" className="h-7 ml-2 dark:hidden" />
              <img src="/3.png" class="h-7 hidden dark:block dark:ml-2" />
              <h4>Billing</h4>
            </div>
            <div className="flex-col  items-center ">
              <img src="check.png" className="h-7 ml-1 dark:hidden" />
              <img src="/4.png" class="h-7 hidden dark:block dark:ml-" />
              <h4>Done</h4>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-600 sm:flex flex-col gap-6 p-10 ">
            <div class="ml-5 relative">
              <p class="dark:text-gray-100 mb-2">Name</p>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Name"
                  class="rounded-md p-2 w-11/12 dark:bg-gray-500 dark:border-none dark:outline-none dark:hover:bg-slate-700 dark:placeholder:text-gray-100 border border-slate-300 hover:border-slate-400 placeholder:text-zinc-600 pl-4"
                />
                <span
                  class="absolute sm:right-20 right-8  h-1 w-1 rounded-full border border-gray-500 bg-no-repeat bg-center p-5"
                  style={{
                    backgroundImage: "url('/i.png')",
                    backgroundSize: "60%",
                    border: "none",
                  }}
                ></span>
              </div>
            </div>
            <div className="ml-5">
              <p className="dark:text-gray-100 mb-2">
                Email<sup>*</sup>
              </p>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Email"
                  class="rounded-md p-2 w-11/12 dark:bg-gray-500 dark:border-none dark:outline-none dark:hover:bg-slate-700 dark:placeholder:text-gray-100 border border-slate-300 hover:border-slate-400 placeholder:text-zinc-600 pl-4"
                />
                <span
                  class="absolute sm:right-20 right-8  h-1 w-1 rounded-full border border-gray-500 bg-no-repeat bg-center p-5"
                  style={{
                    backgroundImage: "url('/i.png')",
                    backgroundSize: "60%",
                    border: "none",
                  }}
                ></span>
              </div>
              <p className="text-slate-400 mb-2">
                Please input a real Email Address
              </p>
            </div>
            <div className="flex flex-col sm:flex-row ml-5 gap-3">
              <div>
                <p className="dark:text-gray-100 mb-2">
                  Password<sup>*</sup>
                </p>
                <div class="relative">
                  <input
                    type="password"
                    placeholder=" Password"
                    className="rounded-md p-2 w-96 border  dark:bg-gray-500 dark:border-none dark:hover:bg-slate-700 dark:outline-none dark:placeholder:text-gray-100 border-slate-300 hover:border-slate-400 placeholder:text-zinc-600"
                  />
                  <span
                    class="absolute sm:right-2 right-8    rounded-full border border-gray-500 bg-no-repeat bg-center p-5"
                    style={{
                      backgroundImage: "url('/i.png')",
                      backgroundSize: "60%",
                      border: "none",
                    }}
                  ></span>
                </div>
                <p className="text-slate-400">Please enter your password</p>
              </div>
              <div>
                <p className="dark:text-gray-100 dark:hover:bg-slate-700 mb-2">
                  Confirm Password<sup>*</sup>
                </p>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="rounded-md p-2 w-96 border  dark:bg-gray-500 dark:border-none dark:hover:bg-slate-700 dark:outline-none dark:placeholder:text-gray-100 border-slate-300 hover:border-slate-400 placeholder:text-zinc-600"
                  />
                  <span
                    class="absolute sm:right-2 right-8   rounded-full border border-gray-500 bg-no-repeat bg-center p-5"
                    style={{
                      backgroundImage: "url('/i.png')",
                      backgroundSize: "60%",
                      border: "none",
                    }}
                  ></span>
                </div>
                <p className="text-slate-400">Password need to match</p>
              </div>
            </div>
            <div className="flex ml-5 mt-6 items-center">
              <input
                type="checkbox"
                class="appearance checked:bg-blue-500 h-6 w-4 rounded-md"
              />
              <p className="ml-2">I accept the Terms and Privacy Policy.</p>
            </div>
          </div>
          <div className=" bg-slate-100 p-5 dark:bg-slate-700 flex sm:justify-end rounded-md">
            <button className="bg-blue-400  dark:bg-blue-500 p-2  w-4/5 ml-10 sm:w-20  dark:hover:bg-blue-900  rounded-md w-20 hover:bg-blue-500">
              <span className="text-white  ">Next </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
