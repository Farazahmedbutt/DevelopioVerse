import React from "react";
import Image from "next/image";
import logo from "../../img/logo-color.png";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate, isInitializing } = useMoralis();
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center">
        <Image width="150" objectFit="contain" src={logo} />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse text-gray-900"
        >
          {isInitializing ? "Logging In" : "Login to DevelopioVerse"}
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
