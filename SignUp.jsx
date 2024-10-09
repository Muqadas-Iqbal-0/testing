import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState(false);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("Please fill all the fields!");
    } else {
      setMsg(true);
      setTimeout(() => {
        setMsg(false);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="container bg-white px-10  py-20 rounded-xl w-1/2 h-1/6 mx-auto mt-10 "
    >
      {/* <h2 className="text-center bg-green-500 rounded p-2 text-2xl  ">
        {msg ? inputData.name + " :Sign Up Successfull" : null}
      </h2> */}
      <h2
        className="text-center bg-green-700 rounded p-2 text-2xl text-white"
        style={{ display: msg ? "block" : "none" }}
      >
        {msg ? inputData.name + "  !  : Sign Up Successfully" : null}
      </h2>

      <h1 className="text-center text-blue-800 font-bold text-4xl mb-10">
        Sign Up Form
      </h1>
      <div className="inputs flex justify-center items-center flex-col gap-6 ">
        <input
          className="p-2 w-full  rounded bg-gray-200 border-none text-black outline-none text-xl"
          type="text"
          name="name"
          value={inputData.name}
          placeholder="Name"
          onChange={handleInput}
        />
        <input
          className="p-2 w-full rounded bg-gray-200 border-none text-black outline-none text-xl"
          type="email"
          name="email"
          value={inputData.email}
          placeholder="Email"
          onChange={handleInput}
        />
        <input
          className="p-2 w-full rounded bg-gray-200 border-none text-black outline-none text-xl "
          type="password"
          name="password"
          value={inputData.password}
          placeholder="Password"
          onChange={handleInput}
        />
      </div>
      <button className="p-2 w-1/2 rounded  bg-blue-900 text-white mt-10 text-2xl font-bold-normal ">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
